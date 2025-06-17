import { join } from "node:path";
import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";
import type {
  ImpactResult,
  ImpactResultEntry,
  ImpactResultFile,
  ImpactResultUpdate,
} from "@impacts/types/results";
import type { Runtime } from "@impacts/types/runtime";
import { minimatch } from "minimatch";
import xxhash from "xxhash-wasm";
import { PluginOrchestrator } from "./utils/plugin-orchestrator.js";

type ImpactOptions = {
  runtime: Runtime;
};

const hasher = await xxhash();

export async function impact(
  config: ImpactConfig,
  options: ImpactOptions,
): Promise<ImpactResult> {
  const orchestrator = new PluginOrchestrator(config, options.runtime);
  const updatedFiles = await orchestrator.listFiles();
  logger.info(`found ${updatedFiles.size} updated files from base branch`);

  const entryResults = new Array<ImpactResultEntry>();
  const updates = new Map<string, ImpactResultUpdate>();
  const files = new Map<string, ImpactResultFile>();

  for await (const entry of config.entries) {
    const importTree = await orchestrator.explore(
      entry.id,
      join(process.cwd(), entry.path),
    );
    const updatedEntryFiles = importTree.intersection(updatedFiles);

    if (!updatedEntryFiles.size) {
      entryResults.push({
        updates: [],
        path: entry.path,
        description: entry.description,
      });
      continue;
    }
    const listUpdatesSpinner = logger.spinner(
      `listing updates concerning ${entry.path} files`,
    );
    const filteredUpdates = await orchestrator.listUpdates(updatedEntryFiles);
    listUpdatesSpinner.succeed(
      `${entry.path}: ${filteredUpdates.length} updates found`,
    );
    for (const update of filteredUpdates) {
      updates.set(update.id, {
        id: update.id,
        references: [],
        title: update.title,
        author: update.author,
        timestamp: update.timestamp,
        meta: [update.id, update.title],
      });
    }
    entryResults.push({
      path: entry.path,
      description: entry.description,
      updates: filteredUpdates.map((update) => {
        const primary = new Array<string>();
        const secondary = new Array<string>();
        for (const file of update.files) {
          const hash = hasher.h64ToString(file.path + file.status);
          files.set(hash, {
            path: file.path,
            status: file.status,
          });
          if (!config.primary) {
            primary.push(hash);
            continue;
          }
          const primaries = config.primary.map((primary) =>
            join(process.cwd(), primary),
          );
          if (primaries.some((primary) => minimatch(file.path, primary))) {
            primary.push(hash);
            continue;
          }
          secondary.push(hash);
        }
        return {
          update: update.id,
          files: {
            primary,
            secondary,
          },
        };
      }),
    });
  }

  logger.info(`found a total of ${updates.size} updates`);

  const augmentSpinner = logger.spinner("augmenting updates");
  await orchestrator.augment(updates);
  augmentSpinner.succeed("updates augmented");

  return {
    entries: entryResults,
    files: Object.fromEntries(files.entries()),
    updates: Object.fromEntries(updates.entries()),
  };
}
