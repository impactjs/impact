import { tmpdir } from "node:os";
import { relative } from "node:path";
import { createPlugin, type Plugin } from "@impacts/plugin-api";
import { Generator, getConfig } from "@tanstack/router-generator";
// import { Project } from "ts-morph";
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
      // const project = new Project();

      for (const [key, value] of res.entries()) {
        config.entries.push({
          id: value.routePath,
          description: "",
          path: relative(process.cwd(), key),
        });
        // const sourceFile = project.addSourceFileAtPath(key);
        // const symbols = sourceFile.getExportSymbols();
        // const route = null;symbols.find((symbol) => symbol.getName() === "Route");
        // if (!route) {
        //   continue;
        // }
        // const comments = route.getJsDocTags();
        // const comment = comments.find(
        //   (comment) => comment.getName() === "description",
        // );
        // config.entries.push({
        //   id: value.routePath,
        //   path: relative(process.cwd(), key),
        //   description: comment?.getText().join("\n") ?? "",
        // });
      }
      return config;
    },
  });
}

export function _impact_auto_create(options: unknown) {
  return tanstackRouter(tanstackRouterOptionsSchema.parse(options));
}
