import fs from "node:fs";
import type { Runtime } from "@impacts/types/runtime";
import {
  CachedInputFileSystem,
  type Resolver,
  ResolverFactory,
} from "enhanced-resolve";
export type { Resolver };

export function createResolver(_runtime: Runtime) {
  return ResolverFactory.createResolver({
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".mjs",
      ".mts",
      ".vue",
      ".json",
      ".d.ts",
      ".astro",
      ".svelte",
    ],
    conditionNames: ["import", "require", "node"],
    fileSystem: new CachedInputFileSystem(fs, 4000),
  });
}

export async function resolveImport(
  resolver: Resolver,
  importSource: string,
  importName: string,
) {
  const resolved = await new Promise<string | false>((resolve, reject) =>
    resolver.resolve({}, importSource, importName, {}, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res ?? false);
    }),
  );
  return resolved;
}
