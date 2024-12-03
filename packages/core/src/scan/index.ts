import { join } from "node:path";
import { History } from "../utils/history.js";
import { scanEntry } from "./scan-entry.js";
import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";

export async function scan(config: ImpactConfig) {
  const history = new History();
  logger.debug(`scanning ${config.entries.length} entries`);

  for await (const entry of config.entries) {
    const spinner = logger.spinner("scanning entries for imports");
    await scanEntry({
      path: join(process.cwd(), entry.path),
      config,
      history,
      spinner,
    });
    spinner.succeed(`scanned ${entry.path}`);
  }

  return history;
}
