import { logger } from "@impacts/logger";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { z } from "zod";

let client = null as unknown as ReturnType<typeof generateClient> | null;

const outputSchema = z
  .object({
    data: z
      .object({
        api_key: z.string(),
      })
      .passthrough(),
    storage: z
      .object({
        aws_region: z.string(),
        bucket_name: z.string(),
      })
      .passthrough(),
  })
  .passthrough();

const headers: Record<string, string> = {};

export function authenticate(
  authKey: "authorization" | "x-api-key",
  value: string,
) {
  switch (authKey) {
    case "x-api-key": {
      // biome-ignore lint/performance/noDelete: we need to delete the key
      delete headers.authorization;
      headers["X-API-Key"] = value;
      break;
    }
    case "authorization": {
      // biome-ignore lint/performance/noDelete: we need to delete the key
      delete headers["X-API-Key"];
      headers.authorization = value;
    }
  }
}

let amplifyOutputs: z.infer<typeof outputSchema> | null = null;

export async function getAmplifyOutputs() {
  if (amplifyOutputs) {
    return amplifyOutputs;
  }

  const response = await Bun.fetch(
    "http://localhost:8080/amplify_outputs.json",
  );
  const outputsResponse = await response.json();
  const result = outputSchema.safeParse(outputsResponse);
  if (!result.success) {
    logger.error("Invalid amplify outputs");
    logger.error(result.error.toString());
    process.exit(1);
  }
  amplifyOutputs = result.data;
  return result.data;
}

export async function getDataClient(): Promise<
  ReturnType<typeof generateClient>
> {
  if (client) {
    return client;
  }

  const outputs = await getAmplifyOutputs();

  Amplify.configure(outputs);

  authenticate("x-api-key", outputs.data.api_key);

  client = generateClient({
    authMode: "apiKey",
    async headers() {
      return headers;
    },
  });

  return client;
}
