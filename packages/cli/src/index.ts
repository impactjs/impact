#! /usr/bin/env bun

import { logger } from "@impacts/logger";
import { cac } from "cac";
import pkg from "../package.json" with { type: "json" };
import { runImpact } from "./commands/run.js";
import { showConfig } from "./commands/show-config.js";
import { whoami } from "./commands/whoami.js";

const cli = cac("impact");

cli
  .option("--cwd <cwd>", "Use current working directory", {
    default: process.cwd(),
  })
  .option("-c, --config <config>", "Use config file")
  .option("--log-level <level>", "Set log level", {
    default: "info",
  });

cli
  .command("run", "run impact")
  .option("-o, --outfile <outfile>", "Output file")
  .option("--format <format>", "Output format")
  .action(runImpact);

cli.command("show-config", "Show config").action(showConfig);

cli.command("whoami", "Show current user").action(whoami);

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
  process.exit(0);
} catch (error) {
  if (error instanceof Error) {
    logger.error(error.message);
    error.stack && logger.debug(error.stack);
    process.exit(1);
  }
  logger.error("Unknown error type");
  logger.error(JSON.stringify(error));
  process.exit(2);
}
