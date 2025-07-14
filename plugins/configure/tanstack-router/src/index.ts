import type { LoadPlugin } from "@impacts/types/plugins";
import type { Runtime } from "@impacts/types/runtime";
import { z } from "zod";

const ecmaScriptOptionsSchema = z
  .object({
    /**
     *
     * @description Path to the routes folder
     */
    routesPath: z.string().optional(),
  })
  .optional();

type EcmaScriptOptions = z.infer<typeof ecmaScriptOptionsSchema>;

import { tmpdir } from "node:os";
import { Generator, getConfig } from "@tanstack/router-generator";
import { Project } from "ts-morph";

export async function tanstackRouter(
  options: EcmaScriptOptions = {},
): LoadPlugin {
  return {
    type: "load",
    name: "tanstack-router",
    async load(config, runtime: Runtime) {
      const generator = new Generator({
        root: process.cwd(),
        config: getConfig({
          routesDirectory: options.routesPath,
          generatedRouteTree: `${tmpdir()}/impact-tree`,
        }),
      });

      const out = {};

      await generator.run();
      const res = generator.getRoutesByFileMap();
      const project = new Project();

      for (const [key, value] of res.entries()) {
        const sourceFile = project.addSourceFileAtPath(key);
        const symbols = sourceFile.getExportSymbols();
        const route = symbols.find((symbol) => symbol.getName() === "Route");
        if (!route) {
          out[value.routePath] = {
            path: key,
          };
          continue;
        }
        const comments = route.getJsDocTags();
        for (const comment of comments) {
          console.log(comment.getName(), comment.getText());
        }
      }
    },
  };
}

export function createTanstackRouterPlugin(options: unknown) {
  return tanstackRouter(tanstackRouterOptionsSchema.parse(options));
}
