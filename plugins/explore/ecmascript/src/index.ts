import { dirname } from "node:path";
import { logger } from "@impacts/logger";
import type { BaseConfig } from "@impacts/types/config";
import type { ScanPlugin } from "@impacts/types/plugins";
import type { Runtime } from "@impacts/types/runtime";
import { Glob } from "bun";
import { init } from "es-module-lexer";
import { z } from "zod";
import { extractImports } from "./extract-imports.js";
import {
  createResolver,
  type Resolver,
  resolveImport,
} from "./resolve-import.js";

const ecmaScriptOptionsSchema = z
  .object({
    /**
     *
     * @description Path to the tsconfig file
     */
    tsconfig: z.string().optional(),
  })
  .optional();

type EcmaScriptOptions = z.infer<typeof ecmaScriptOptionsSchema>;

export function ecmascript(options: EcmaScriptOptions = {}): ScanPlugin {
  const history = new Map<string, Set<string>>();
  return {
    type: "explore",
    name: "ecmascript",
    shouldScan(id, config) {
      return shouldScan(id, config);
    },
    async explore(id, path, config, runtime: Runtime) {
      await init;
      const resolver = createResolver(runtime);
      const spinner = logger.spinner(`${id}: starting import tree exploration`);
      const result = await exploreEntrypoint(
        id,
        path,
        process.cwd(),
        new Set(),
        history,
        options,
        config,
        runtime,
        resolver,
        spinner,
      );
      spinner.succeed(`${path}: ${result.size} files found in import tree`);
      return result;
    },
  };
}

function shouldScan(path: string, config: BaseConfig) {
  const ignore = (config.ignore ?? []).some((ignore) => {
    const glob = new Glob(ignore);
    return glob.match(path);
  });
  return (
    !ignore &&
    (/.+\.(t|j)sx?$/.test(path) || /.+\.(vue|astro|svelte)$/.test(path))
  );
}

async function exploreEntrypoint(
  id: string,
  path: string,
  base: string,
  files: Set<string>,
  history: Map<string, Set<string>>,
  options: NonNullable<EcmaScriptOptions>,
  config: BaseConfig,
  runtime: Runtime,
  resolver: Resolver,
  spinner: ReturnType<typeof logger.spinner>,
) {
  spinner.text = `${id}: checking if we should scan ${path}`;
  if (!shouldScan(path, config) || files.has(path) || history.has(path)) {
    return files.union(history.get(path) ?? new Set<string>());
  }
  files.add(path);
  spinner.text = `${id}: extracting imports from ${path}`;
  const imports = await extractImports(path, runtime);
  spinner.text = `${id}: found ${imports.length} imports in ${path}`;
  for await (const imp of imports) {
    try {
      spinner.text = `${id}: resolving "${imp}" from "${dirname(path)}"`;
      const resolved = await resolveImport(resolver, dirname(path), imp);
      spinner.text = `${id}: resolved "${imp}" to "${resolved}"`;
      if (!resolved) {
        continue;
      }
      const tree = await exploreEntrypoint(
        id,
        resolved,
        base,
        files,
        history,
        options,
        config,
        runtime,
        resolver,
        spinner,
      );
      for (const entry of tree) {
        files.add(entry);
      }
    } catch {
      spinner.warn(`${id}: failed to resolve "${imp}" from "${dirname(path)}"`);
      spinner.start(`${id}: continuing`);
    }
  }
  history.set(path, files);
  return files;
}

export function createEcmascriptPlugin(options: unknown) {
  return ecmascript(ecmaScriptOptionsSchema.parse(options));
}
