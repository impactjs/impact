import { loadConfig } from "@impacts/config/internal";
import { logger } from "@impacts/logger";

type ShowConfigOptions = {
  cwd: string;
  config?: string;
};

export async function showConfig(options: ShowConfigOptions) {
  const config = await loadConfig({
    cwd: options.cwd,
    config: options.config,
  });

  logger.success(JSON.stringify(config, null, 2));
}
