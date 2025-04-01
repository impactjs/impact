import type { PluginContext } from "@impacts/types/plugins";

function extractIssues(text: string) {
  const matches = /([A-Z]+-\d+)/g.exec(text);
  return new Set(matches);
}

export function extractLinearFiltersFromContext(context: PluginContext) {
  const teams = new Set<string>();
  const issuesMap = new Map<string, Set<string>>();

  for (const [sha, commit] of context.updates) {
    const issues = extractIssues(commit.title);
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
            Array.from(extractIssues(entity.title).values()),
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
