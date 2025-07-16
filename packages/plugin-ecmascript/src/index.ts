import { dirname } from "node:path";
import { logger } from "@impacts/logger";
import { createPlugin, type Plugin } from "@impacts/plugin-api";
import { init } from "es-module-lexer";
import z from "zod";
import { extractImports } from "./extract-imports.js";
import { createResolver, resolveImport } from "./resolve-import.js";

const ecmascriptOptionsSchema = z.object({
  exclude: z.array(z.string().or(z.instanceof(RegExp))).optional(),
  ignore: z.array(z.string().or(z.instanceof(RegExp))).optional(),
});

type EcmascriptOptions = z.infer<typeof ecmascriptOptionsSchema>;

export function ecmascript(options: EcmascriptOptions = {}): Plugin {
  const history = new Map<string, Set<string>>();
  const resolvedHistory = new Map<string, string | null>();
  const resolver = createResolver();
  const exclude = options.exclude?.map((exclude) => new RegExp(exclude)) ?? [
    /\/node_modules\//,
  ];
  const ignore = options.ignore?.map((ignore) => new RegExp(ignore)) ?? [];
  return createPlugin({
    name: "@impacts/ecmascript",
    async config(config) {
      await init;
      return config;
    },
    async resolveId(id, importer) {
      try {
        if (exclude.some((ex) => ex.test(importer))) {
          return null;
        }
        const saved = resolvedHistory.get(`${importer} -> ${id}`);
        if (saved !== undefined) {
          return saved;
        }
        const resolved = await resolveImport(resolver, dirname(importer), id);
        resolvedHistory.set(`${importer} -> ${id}`, resolved || null);
        return resolved || null;
      } catch {
        logger.warn(
          `[${this.name}]: could not resolve '${id}' from '${importer}'`,
        );
        resolvedHistory.set(`${importer} -> ${id}`, null);
        return null;
      }
    },
    async load(file) {
      if (exclude.some((ex) => ex.test(file))) {
        return new Set();
      }
      const saved = history.get(file);
      if (saved) {
        return saved;
      }
      const imports = await extractImports(file);
      const result = new Set(
        imports.filter((imp) => !ignore.some((i) => i.test(imp))),
      );
      history.set(file, result);
      return result;
    },
  });
}

export function _impact_auto_create(options: unknown) {
  return ecmascript(ecmascriptOptionsSchema.parse(options));
}
