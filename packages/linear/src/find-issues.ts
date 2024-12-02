import type { LinearClient, LinearDocument } from "@linear/sdk";
import type { ImpactPluginResultEntry } from "@impact/types/results";
import { logger } from "@impact/logger";

type FindIssuesOptions = {
  /**
   * An istance of the Linear SDK client (can be authenticated)
   */
  linear: LinearClient;

  /**
   * The list of issues to find (Map<issueKey, Set<commitSha>>)
   */
  issues: Map<string, Set<string>>;

  /**
   * The teams to filter by
   */
  teams: Set<string>;

  /**
   * @description Limit the number api-calls to find the PRs
   * @summary When one or more commits cannot be found in the PRs, the function will make additional api-calls to find them (due to pagination)
   * @default 3 -- this is arbitrary and can be changed in the future
   */
  limit?: number;
};

export async function finsIssues({
  linear,
  issues,
  teams,
  limit = 3,
}: FindIssuesOptions): Promise<Map<string, ImpactPluginResultEntry[]>> {
  const uniqueComits = new Set(
    Array.from(issues.values()).flatMap((s) => Array.from(s)),
  );
  const payload: LinearDocument.IssuesQueryVariables = {
    first: 250,
    filter: {
      team: {
        key: {
          in: Array.from(teams),
        },
      },
    },
  };

  const shas = new Map<string, ImpactPluginResultEntry[]>();

  const spinner = logger.spinner(`retrieving issues (0/${issues.size})`);

  try {
    let issuesRetrieved = 0;
    for (let attempt = 0; attempt < limit; attempt++) {
      const { nodes, pageInfo } = await linear.issues(payload);
      for (const issue of nodes) {
        if (!issues.has(issue.identifier)) {
          continue;
        }
        issuesRetrieved++;
        spinner.text = `retrieving issues (${shas.size}/${issues.size})`;
        for (const sha of issues.get(issue.identifier) ?? []) {
          const existing = shas.get(sha) ?? [];
          existing.push({
            url: issue.url,
            origin: "linear",
            title: issue.title,
            id: issue.identifier,
            description: issue.description ?? "",
          });
          shas.set(sha, existing);
        }
      }
      payload.after = pageInfo.endCursor;
      if (!pageInfo.hasNextPage) {
        break;
      }
      if (shas.size === uniqueComits.size) {
        break;
      }
    }
    spinner.succeed(`retrieved ${issuesRetrieved} issues`);
    return shas;
  } catch (error) {
    spinner.fail("failed to retrieve issues");
    return new Map();
  }
}
