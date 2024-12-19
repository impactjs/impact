#! /usr/bin/env bun

import { loadConfig } from "@impacts/config/internal";
import { impact } from "@impacts/core";
import { logger } from "@impacts/logger";
import { cac } from "cac";
import pkg from "../package.json" with { type: "json" };
import { write } from "./utils/output.js";

const cli = cac("impact");

cli
  .option("--cwd <cwd>", "Use current working directory", {
    default: process.cwd(),
  })
  .option("-c, --config <config>", "Use config file")
  .option("--log-level <level>", "Set log level", {
    default: "success",
  });

cli
  .command("", "run impact")
  .option("--branch <branch>", "Use branch")
  .option("-o, --outfile <outfile>", "Output file")
  .option("--format <format>", "Output format")
  .action(async (options) => {
    const config = await loadConfig({
      cwd: options.cwd,
      config: options.config,
    });

    const branch = config.branch ?? options.branch;

    if (!branch) {
      throw new Error("Branch is required");
    }

    const result = await impact(config, {
      branch,
    });

    await write(result, {
      outfile: options.outfile ?? config.outfile,
      format: options.format ?? config.format,
    });
  });

cli.command("show-config", "Show config").action(async (options) => {
  console.log("show config", options);
  const config = await loadConfig({
    cwd: options.cwd,
    config: options.config,
  });

  logger.success(JSON.stringify(config, null, 2));
});

cli.help();

cli.version(pkg.version);

try {
  const { options } = cli.parse(process.argv, { run: false });
  if (options.cwd) {
    process.chdir(options.cwd);
  }
  if (options.logLevel) {
    logger.setLogLevel(options.logLevel);
  }
  if (!cli.matchedCommand) {
    logger.debug(`No command matched with argv: ${JSON.stringify(options)}`);
    cli.outputHelp();
    process.exit(1);
  }
  logger.debug(`Running command ${cli.matchedCommand.name || "[root]"}`);
  logger.debug(`Options: ${JSON.stringify(options)}`);
  await cli.runMatchedCommand();
} catch (error) {
  if (error instanceof Error) {
    logger.error(error.message);
    error.stack && logger.debug(error.stack);
    process.exit(1);
  }
  logger.error(String(error));
  process.exit(1);
}
