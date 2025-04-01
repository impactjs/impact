import { join } from "node:path";
import type { ImpactConfig } from "@impacts/types/config";
import type { VcsUpdate } from "@impacts/types/plugins";
import type {
  ImpactResult,
  ImpactResultRawEntry,
  ImpactResultSummaryEntry,
} from "@impacts/types/results";
import type { Runtime } from "@impacts/types/runtime";
import { PluginOrchestrator } from "./utils/plugin-orchestrator.js";

type ImpactOptions = {
  runtime: Runtime;
};

export async function impact(
  config: ImpactConfig,
  options: ImpactOptions,
): Promise<ImpactResult> {
  const orchestrator = new PluginOrchestrator(config, options.runtime);
  const diff = await orchestrator.listFiles();
  const result = new Array<ImpactResultRawEntry>();

  for await (const entry of config.entries) {
    const tree = await orchestrator.explore(join(process.cwd(), entry.path));
    const files = tree.intersection(diff);

    if (!files.size) {
      continue;
    }
    const updates = await orchestrator.listUpdates(files);
    result.push({
      id: entry.id,
      path: entry.path,
      description: entry.description,
      diff: Array.from(files),
      updates,
    });
  }

  const vcsUpdates = new Map<string, VcsUpdate>();
  for (const update of result.flatMap((entry) => entry.updates)) {
    vcsUpdates.set(update.id, update);
  }

  const updates = await orchestrator.transform({
    updates: vcsUpdates,
    plugins: {},
  });

  const entrypoints = result.reduce<ImpactResultSummaryEntry[]>(
    (acc, entry) => {
      acc.push({
        id: entry.id,
        description: entry.description,
        path: entry.path,
        updates: entry.updates.reduce<ImpactResultSummaryEntry["updates"]>(
          (acc, commit) => {
            const outputPriority = orchestrator.getOutputPriority();
            const references = Object.entries(updates.plugins)
              .map(([plugin, pluginUpdates]) => {
                const update = pluginUpdates.get(commit.id);
                if (!update) {
                  return null;
                }
                return [plugin, update] as const;
              })
              .filter((entry) => !!entry)
              .sort(([left], [right]) => {
                return (
                  outputPriority.indexOf(left) - outputPriority.indexOf(right)
                );
              });
            acc.push({
              main: {
                meta: [],
                origin: "git",
                id: commit.id,
                files: commit.files,
                title: commit.title,
                author: commit.author,
              },
              timestamp: new Date(commit.date).getTime(),
              references: references.flatMap(([, entries]) => entries),
            });
            return acc;
          },
          [],
        ),
      });
      return acc;
    },
    [],
  );

  return {
    entrypoints,
    raw: result,
  };
}
