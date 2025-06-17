import type { ImpactResultUpdate } from "@impacts/types/results";

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

export function extractLinearFiltersFromUpdates(
  updates: Map<string, ImpactResultUpdate>,
  availableTeams: Array<string>,
) {
  const teams = new Set<string>();
  const issuesMap = new Map<string, Set<string>>();

  for (const update of updates.values()) {
    // const issues = extractIssues(update.title, availableTeams);

    const issues = new Set(
      [
        extractIssues(update.title, availableTeams),
        ...update.references.map((reference) =>
          extractIssues(reference.title, availableTeams),
        ),
        ...update.references
          .flatMap((reference) => reference.meta)
          .flatMap((meta) => extractIssues(meta, availableTeams)),
      ].flatMap((issues) => [...issues]),
    );

    for (const issue of issues) {
      const team = issue.split("-")[0];
      teams.add(team);
    }
    for (const issue of issues) {
      issuesMap.set(
        issue,
        new Set([update.id, ...(issuesMap.get(issue) ?? [])]),
      );
    }
  }

  return { teams, issues: issuesMap };
}
