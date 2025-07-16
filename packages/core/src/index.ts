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
import xxhash from "xxhash-wasm";
import { traverse } from "./traverse.js";

const hasher = await xxhash();

export async function impact(config: ImpactConfig): Promise<ImpactResult> {
  const orchestrator = new PluginOrchestrator(config);
  console.time("init");
  await orchestrator.init();
  console.timeEnd("init");
  const versions = await orchestrator.versions();
  logger.info(`found ${versions.size} versions changes`);

  const entryResults: ImpactResultEntry[] = [];
  const updates = new Map<string, ImpactResultUpdate>();
  const filesMap = new Map<string, ImpactResultFile>();

  for await (const entry of config.entries) {
    console.time(`traverse ${entry.path}`);
    const entryUpdates = new Set<string>();
    const tree = await traverse(join(process.cwd(), entry.path), orchestrator);
    const entryFiles = new Set<string>();
    for (const { files, ...version } of versions.values()) {
      const intersection = files.filter((file) => tree.has(file.path));
      if (intersection.length) {
        for (const file of intersection) {
          const hash = hasher.h32(file.path + file.status, 0).toString(16);
          entryFiles.add(hash);
          if (!filesMap.has(hash)) {
            filesMap.set(hash, file);
          }
        }
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

    if (entryUpdates.size) {
      entryResults.push({
        path: entry.path,
        description: entry.description,
        files: Array.from(entryFiles),
        updates: Array.from(entryUpdates),
      });
    }
    console.timeEnd(`traverse ${entry.path}`);
  }
  logger.info(`found a total of ${updates.size} updates`);

  const augmentSpinner = logger.spinner("augmenting updates");
  await orchestrator.augment(updates);
  augmentSpinner.succeed("updates augmented");

  return {
    entries: entryResults,
    files: Object.fromEntries(filesMap.entries()),
    updates: Object.fromEntries(updates.entries()),
  };
}
