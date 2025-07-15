import { tmpdir } from "node:os";
import { createPlugin, type Plugin } from "@impacts/plugin-api";
import { Generator, getConfig } from "@tanstack/router-generator";
import { Project } from "ts-morph";
import { z } from "zod";

const tanstackRouterOptionsSchema = z
  .object({
    /**
     *
     * @description Path to the routes folder
     */
    routesPath: z.string().optional(),
  })
  .optional();

type TanstackRouterOptions = z.infer<typeof tanstackRouterOptionsSchema>;

export function tanstackRouter(options: TanstackRouterOptions = {}): Plugin {
  return createPlugin({
    name: "@impacts/tanstack-router",
    async config(config) {
      const generator = new Generator({
        root: process.cwd(),
        config: getConfig({
          routesDirectory: options.routesPath,
          generatedRouteTree: `${tmpdir()}/impact-tree`,
        }),
      });

      await generator.run();
      const res = generator.getRoutesByFileMap();
      const project = new Project();

      for (const [key, value] of res.entries()) {
        const sourceFile = project.addSourceFileAtPath(key);
        const symbols = sourceFile.getExportSymbols();
        const route = symbols.find((symbol) => symbol.getName() === "Route");
        if (!route) {
          config.entries.push({
            id: key,
            description: "",
            path: value.routePath,
          });
          continue;
        }
        const comments = route.getJsDocTags();
        const comment = comments.find(
          (comment) => comment.getName() === "description",
        );
        config.entries.push({
          id: key,
          path: value.routePath,
          description: comment?.getText().join("\n") ?? "",
        });
      }
      return config;
    },
  });
}

export function _impact_auto_create(options: unknown) {
  return tanstackRouter(tanstackRouterOptionsSchema.parse(options));
}
