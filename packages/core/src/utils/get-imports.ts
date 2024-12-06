import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";
import { extname } from "node:path";

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

export async function getImports(path: string, config: ImpactConfig) {
  try {
    const transpiler = new Bun.Transpiler({
      tsconfig: config.tsconfig,
      loader: getLoader(path),
    });
    const content = await Bun.file(path).text();
    const { imports } = transpiler.scan(content);
    logger.debug(`found ${imports.length} imports in ${path}`);
    return imports.map((imp) => imp.path);
  } catch (e) {
    logger.warn(`[impact]: failed to get imports from ${path}`);
    logger.debug(e instanceof Error ? e.message : String(e));
    return [];
  }
}
