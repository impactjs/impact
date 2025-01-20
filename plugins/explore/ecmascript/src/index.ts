import { dirname, extname } from "node:path";
import { logger } from "@impacts/logger";
import type { BaseConfig } from "@impacts/types/config";
import type { ScanPlugin } from "@impacts/types/plugins";
import { Glob } from "bun";
import { z } from "zod";

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
    async explore(id, config) {
      return exploreEntrypoint(
        id,
        process.cwd(),
        new Set(),
        history,
        options,
        config,
      );
    },
  };
}

function shouldScan(id: string, config: BaseConfig) {
  const ignore = (config.ignore ?? []).some((ignore) => {
    const glob = new Glob(ignore);
    return glob.match(id);
  });
  return !ignore && /.+\.(t|j)sx?$/.test(id);
}

async function exploreEntrypoint(
  id: string,
  base: string,
  files: Set<string>,
  history: Map<string, Set<string>>,
  options: NonNullable<EcmaScriptOptions>,
  config: BaseConfig,
) {
  if (!shouldScan(id, config) || files.has(id)) {
    return files.union(history.get(id) ?? new Set<string>());
  }
  files.add(id);
  const transpiler = await createTranspiler(id, options);
  const content = await Bun.file(id).text();
  const { imports } = transpiler.scan(content);
  for await (const imp of imports) {
    try {
      const resolved = await Bun.resolve(imp.path, dirname(id));
      if (!resolved) {
        continue;
      }
      const tree = await exploreEntrypoint(
        resolved,
        base,
        files,
        history,
        options,
        config,
      );
      for (const entry of tree) {
        files.add(entry);
      }
    } catch {
      logger.warn(`failed to resolve ${imp.path} from ${dirname(id)}`);
    }
  }
  history.set(id, files);
  return files;
}

async function createTranspiler(
  id: string,
  options: NonNullable<EcmaScriptOptions>,
) {
  return new Bun.Transpiler({
    tsconfig: !options.tsconfig
      ? undefined
      : await Bun.file(options.tsconfig).json(),
    loader: getLoader(id),
  });
}

function getLoader(path: string) {
  switch (extname(path)) {
    case ".ts":
      return "ts";
    case ".tsx":
      return "tsx";
    case ".js":
      return "js";
    case ".jsx":
      return "jsx";
    default:
      return undefined;
  }
}

export function createEcmascriptPlugin(options: unknown) {
  return ecmascript(ecmaScriptOptionsSchema.parse(options));
}
