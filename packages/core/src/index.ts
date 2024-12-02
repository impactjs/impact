import type { ImpactConfig } from "@impacts/types/config";
import { scan } from "./scan/index.js";
import { Git } from "@impacts/git";
import { join } from "node:path";
import { PluginOrchestrator } from "./utils/plugin-orchestrator.js";
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
  const scanResult = await scan(config);
  const repository = new Git(options.branch);
  const diff = repository.diff();
  const result = new Array<ImpactResultRawEntry>();
  for await (const entry of config.entries) {
    const files = [...scanResult.flat(join(process.cwd(), entry.path))].filter(
      (file) => diff.has(file),
    );
    if (!files.length) {
      continue;
    }
    const commits = repository.log(files);
    result.push({
      id: entry.id,
      path: entry.path,
      description: entry.description,
      diff: files,
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

  const orchestrator = new PluginOrchestrator(config);
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
