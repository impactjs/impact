import { loadConfig } from "@impacts/config/internal";
import { impact } from "@impacts/core";
import { createRuntime } from "@impacts/runtime-bun";
import { write } from "../utils/output.js";

type ImpactOptions = {
  cwd: string;
  config?: string;
  format?: string;
  outfile?: string;
};

export async function runImpact(options: ImpactOptions) {
  const config = await loadConfig({
    cwd: options.cwd,
    config: options.config,
  });

  const result = await impact(config, {
    runtime: createRuntime(),
  });

  await write(result, config, {
    outfile: options.outfile ?? config.outfile,
    format: options.format ?? config.format ?? "json",
  });
}
