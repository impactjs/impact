import type { PluginContext } from "@impacts/types/plugins";

function extractIssues(text: string, availableTeams: Array<string>) {
  const pattern = availableTeams
    .map((team) => `${team}-\\d+|${team.toLocaleLowerCase()}-\\d+`)
    .join("|");
  const regex = new RegExp(`(${pattern})`, "g");
  const matches = regex.exec(text);
  return new Set(
    matches?.map((match) => match.trim().toLocaleUpperCase()) ?? [],
  );
}

export function extractLinearFiltersFromContext(
  context: PluginContext,
  availableTeams: Array<string>,
) {
  const teams = new Set<string>();
  const issuesMap = new Map<string, Set<string>>();

  for (const [sha, commit] of context.updates) {
    const issues = extractIssues(commit.title, availableTeams);
    for (const issue of issues) {
      const team = issue.split("-")[0];
      teams.add(team);
    }
    const all = Object.values(context.plugins).reduce((acc, plugin) => {
      const entity = plugin.get(sha);
      if (!entity) {
        return acc;
      }
      const issues = new Set(
        [entity]
          .flat()
          .flatMap((entity) =>
            [
              [...extractIssues(entity.title, availableTeams).values()],
              ...entity.meta.map((meta) => [
                ...extractIssues(meta, availableTeams),
              ]),
            ].flat(),
          ),
      );
      for (const issue of issues) {
        const team = issue.split("-")[0];
        teams.add(team);
      }
      return acc.union(issues);
    }, issues);
    for (const issue of all) {
      issuesMap.set(issue, new Set([sha, ...(issuesMap.get(issue) ?? [])]));
    }
  }

  return { teams, issues: issuesMap };
}
