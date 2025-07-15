// import { join } from "node:path";

import { join } from "node:path";
import { logger } from "@impacts/logger";
import { PluginOrchestrator } from "@impacts/plugin-api";
import type { ImpactConfig } from "@impacts/types/config";
import type {
  ImpactResult,
  ImpactResultEntry,
  ImpactResultFile,
  ImpactResultUpdate,
} from "@impacts/types/results";
// import { minimatch } from "minimatch";
// import xxhash from "xxhash-wasm";
import { traverse } from "./traverse.js";

// const hasher = await xxhash();

export async function impact(config: ImpactConfig): Promise<ImpactResult> {
  const orchestrator = new PluginOrchestrator(config);
  console.time("init");
  await orchestrator.init();
  console.timeEnd("init");
  const versions = await orchestrator.versions();
  logger.info(`found ${versions.size} versions changes`);

  const entryResults: ImpactResultEntry[] = [];
  const updates = new Map<string, ImpactResultUpdate>();
  const files = new Map<string, ImpactResultFile>();

  for await (const entry of config.entries) {
    const entryUpdates = new Set<string>();
    const tree = await traverse(join(process.cwd(), entry.path), orchestrator);
    for (const version of versions.values()) {
      if (version.files.some((file) => tree.has(file.path))) {
        entryUpdates.add(version.id);
        if (!updates.has(version.id)) {
          updates.set(version.id, {
            ...version,
            references: [],
            meta: [version.title, version.description],
          });
        }
      }
    }

    if (!entryUpdates.size) {
      entryResults.push({
        path: entry.path,
        description: entry.description,
        updates: Array.from(entryUpdates),
      });
    }
  }
  // const listUpdatesSpinner = logger.spinner(
  //   `listing updates concerning ${entry.path} files`,
  // );
  // const filteredUpdates = await orchestrator.listUpdates(updatedEntryFiles);
  // listUpdatesSpinner.succeed(
  //   `${entry.path}: ${filteredUpdates.length} updates found`,
  // );
  // for (const update of filteredUpdates) {
  //   updates.set(update.id, {
  //     id: update.id,
  //     references: [],
  //     title: update.title,
  //     author: update.author,
  //     timestamp: update.timestamp,
  //     meta: [update.id, update.title],
  //   });
  // }
  // entryResults.push({
  //   path: entry.path,
  //   description: entry.description,
  //   updates: filteredUpdates.map((update) => {
  //     const primary: string[] = [];
  //     const secondary: string[] = [];
  //     for (const file of update.files) {
  //       const hash = hasher.h64ToString(file.path + file.status);
  //       files.set(hash, {
  //         path: file.path,
  //         status: file.status,
  //       });
  //       if (!config.primary) {
  //         primary.push(hash);
  //         continue;
  //       }
  //       const primaries = config.primary.map((primary) =>
  //         join(process.cwd(), primary),
  //       );
  //       if (primaries.some((primary) => minimatch(file.path, primary))) {
  //         primary.push(hash);
  //         continue;
  //       }
  //       secondary.push(hash);
  //     }
  //     return {
  //       update: update.id,
  //       files: {
  //         primary,
  //         secondary,
  //       },
  //     };
  //   }),
  // });

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
