import type { ImpactConfig } from "@impacts/types/config";
import { Git } from "@impacts/git";
import { PluginOrchestrator } from "./utils/plugin-orchestrator.js";
import { join } from "node:path";
import type {
  ImpactPluginResultEntry,
  ImpactResult,
  ImpactResultRawEntry,
  ImpactResultSummaryEntry,
} from "@impacts/types/results";

type ImpactOptions = {
  /**
   * @description The branch to compare against
   */
  branch: string;
};

export async function impact(
  config: ImpactConfig,
  options: ImpactOptions,
): Promise<ImpactResult> {
  const repository = new Git(options.branch);
  const diff = repository.diff();
  const result = new Array<ImpactResultRawEntry>();
  const orchestrator = new PluginOrchestrator(config);

  for await (const entry of config.entries) {
    const tree = await orchestrator.scan(join(process.cwd(), entry.path));
    const files = tree.intersection(diff);
    console.log(entry.id, files.size, tree.size);
    if (!files.size) {
      continue;
    }
    const commits = repository.log(files);
    result.push({
      id: entry.id,
      path: entry.path,
      description: entry.description,
      diff: Array.from(files),
      commits,
    });
  }

  const commits = new Map<
    string,
    {
      hash: string;
      date: string;
      author: string;
      message: string;
    }
  >();
  for (const commit of result.flatMap((entry) => entry.commits)) {
    commits.set(commit.hash, commit);
  }

  const updates = await orchestrator.transform({
    commits,
    plugins: {},
  });

  const entrypoints = result.reduce<ImpactResultSummaryEntry[]>(
    (acc, entry) => {
      acc.push({
        id: entry.id,
        description: entry.description,
        path: entry.path,
        updates: entry.commits.reduce<ImpactResultSummaryEntry["updates"]>(
          (acc, commit) => {
            const outputPriority = orchestrator.getOutputPriority();
            const createGitReference = (): readonly [
              string,
              ImpactPluginResultEntry[],
            ] => [
              "git",
              [
                {
                  url: "",
                  origin: "git",
                  id: commit.hash,
                  title: commit.message,
                  description: "",
                },
              ],
            ];
            const [main, ...references] = [
              createGitReference(),
              ...Object.entries(updates.plugins).map(
                ([plugin, pluginUpdates]) => {
                  const update = pluginUpdates.get(commit.hash);
                  if (!update) {
                    return null;
                  }
                  return [plugin, update] as const;
                },
              ),
            ]
              .filter((entry) => !!entry)
              .sort(([left], [right]) => {
                return (
                  outputPriority.indexOf(left) - outputPriority.indexOf(right)
                );
              });
            const [plugin, entries] = main;
            for (const update of entries) {
              acc.push({
                main: update,
                origin: plugin,
                timestamp: new Date(commit.date).getTime(),
                references: references.flatMap(([, entries]) => entries),
              });
            }
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
