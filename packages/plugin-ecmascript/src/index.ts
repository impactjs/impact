import { dirname } from "node:path";
import { createPlugin, type Plugin } from "@impacts/plugin-api";
import { init } from "es-module-lexer";
import { extractImports } from "./extract-imports.js";
import { createResolver, resolveImport } from "./resolve-import.js";

export function ecmascript(): Plugin {
  const history = new Map<string, Set<string>>();
  const resolver = createResolver();
  return createPlugin({
    name: "@impacts/ecmascript",
    async config(config) {
      await init;
      return config;
    },
    async resolveId(id, importer) {
      const resolved = await resolveImport(resolver, dirname(importer), id);
      return resolved || null;
    },
    async load(file) {
      const imports = await extractImports(file);
      const result = new Set(imports);
      history.set(file, result);
      return result;
    },
  });
}

export function _impact_auto_create(_: unknown) {
  return ecmascript();
}
