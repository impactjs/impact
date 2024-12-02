import type { ImpactConfig } from "@impacts/types/config";
import { existsSync } from "node:fs";
import { getImports } from "../utils/get-imports.js";
import { dirname } from "node:path";
import { resolve } from "../utils/resolve-file.js";
import type { History } from "../utils/history.js";
import { logger } from "@impacts/logger";

type ScanEntryOptions = {
  path: string;
  config: ImpactConfig;
  history: History;
  spinner: ReturnType<typeof logger.spinner>;
};

export async function scanEntry(options: ScanEntryOptions) {
  try {
    if (!existsSync(options.path)) {
      logger.debug(`${options.path} does not exist`);
      return options.history;
    }
    if (options.history.has(options.path)) {
      logger.debug(`${options.path} already scanned`);
      return options.history;
    }
    options.spinner.text = `scanning ${options.path} for imports`;
    options.history.register(options.path);
    const imports = await getImports(options.path);
    for await (const imp of imports) {
      const resolved = await resolve(imp, dirname(options.path));
      if (!resolved) {
        logger.warn(`failed to resolve ${imp} in ${options.path}`);
        continue;
      }
      if (
        [
          /\.json$/,
          /\.css$/,
          /\.scss$/,
          /\.sass$/,
          /\.less$/,
          /\.styl$/,
          /\.stylus$/,
          /\.png$/,
          /\.jpg$/,
          /\.jpeg$/,
          /\.gif$/,
          /\.svg$/,
          /\.webp$/,
          /\.ico$/,
          /\.bmp$/,
          /\.tiff$/,
          ...(options.config.ignore ?? []),
        ].some((ignore) => {
          if (ignore instanceof RegExp) {
            return ignore.test(resolved);
          }
          return resolved.includes(ignore);
        })
      ) {
        continue;
      }
      options.history.add(options.path, [resolved]);
      await scanEntry({
        ...options,
        path: resolved,
      });
    }
    return;
  } catch {
    logger.error(`Something went wrong while scanning ${options.path}`);
  }
}
