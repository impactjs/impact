import { createRuntime } from "@impacts/runtime-bun";
import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResult } from "@impacts/types/results";
import { uploadData } from "aws-amplify/storage";
import yaml from "yaml";
import { getAmplifyOutputs } from "./data-client.js";
import { getGlobalConfig } from "./getGlobalConfig.js";
import { login } from "./login.js";

type WriteOptions = {
  outfile?: string;
  format?: string;
};

export async function write(
  result: ImpactResult,
  config: ImpactConfig,
  options: WriteOptions = {},
) {
  const output = await render(result, options.format, config);
  console.log("Writing to", config.outfile, options.format);

  await output(config.outfile);
}

async function render(
  result: ImpactResult,
  format: string | undefined,
  config: ImpactConfig,
) {
  const runtime = createRuntime();
  switch (format ?? "yaml") {
    case "json":
      return async (outfile?: string) => {
        if (!outfile) {
          console.log(JSON.stringify(result, null, 2));
          return;
        }
        await runtime.fs.write(outfile, JSON.stringify(result, null, 2));
      };
    case "yaml":
      return async (outfile?: string) => {
        const yamlString = yaml.stringify(result);
        if (!outfile) {
          console.log(yamlString);
          return;
        }
        await runtime.fs.write(outfile, yamlString);
      };
    case "serve": {
      // Serve the result as a json file on port 3630
      return () => {
        Bun.serve({
          port: 3630,
          fetch(req) {
            if (req.method === "GET") {
              return new Response(JSON.stringify(result), {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Methods": "GET",
                },
              });
            }
            return new Response("Method not allowed", { status: 405 });
          },
        });
        console.log("Server running at http://localhost:3630");
      };
    }
    case "impact": {
      return async () => {
        // create a blob from the result in json format
        const blob = new Blob([JSON.stringify(result)], {
          type: "application/json",
        });
        if (!config.id) {
          throw new Error("No project id found in config");
        }
        console.log("Uploading to project", config.id);
        const globalConfig = await getGlobalConfig();
        if (!globalConfig.secret) {
          throw new Error("No secret found in global config");
        }
        await login(globalConfig.secret);
        const outputs = await getAmplifyOutputs();
        await uploadData({
          data: blob,
          path: `projects/${config.id}.json`,
          options: {
            contentType: "application/json",
            bucket: {
              region: outputs.storage.aws_region,
              bucketName: outputs.storage.bucket_name,
            },
          },
        }).result;
      };
    }
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
