import { readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { relative } from "node:path";
import { createPlugin, type Plugin } from "@impacts/plugin-api";
import { Generator, getConfig } from "@tanstack/router-generator";
import { parse } from "comment-parser";
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

      const entries = await Promise.all(
        Array.from(res.entries()).map(async ([key, value]) => {
          const entry = {
            id: value.routePath,
            description: "",
            path: relative(process.cwd(), key),
          };
          const content = await readFile(key, "utf-8");
          const comments =
            /\/\*\*[\r\n\t .\w@*'"()[\]{}:;,\-\\/+=!#$%^&|<>?]*?\*\//g.exec(
              content,
            );
          if (!comments) {
            return entry;
          }
          const resolved = comments.flatMap((comment) =>
            parse(comment).flatMap((item) => item.tags),
          );
          const impact = resolved.find((item) => item.tag === "impact");
          if (impact) {
            entry.description = [impact.name, impact.description].join(" ");
          }
          return entry;
        }),
      );
      config.entries.push(...entries);
      return config;
    },
  });
}

export function _impact_auto_create(options: unknown) {
  return tanstackRouter(tanstackRouterOptionsSchema.parse(options));
}
