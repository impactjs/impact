import { logger } from "@impacts/logger";
import type { ImpactPluginResultEntry } from "@impacts/types/results";
import type { Octokit } from "@octokit/rest";

export interface FindPullRequestsByMergeCommitsParams {
  /**
   * @description The github client to use for making api-calls (may need to be authenticated)
   */
  octokit: Octokit;

  /**
   * @description The owner and name of the repository
   */
  repository: {
    /**
     * @description The owner of the repository
     */
    owner: string;

    /**
     * @description The name of the repository
     */
    repo: string;
  };

  /**
   * @description The list of merge commits to find the PRs for
   */
  shas: Set<string>;

  /**
   * @description Limit the number api-calls to find the PRs
   * @summary When one or more commits cannot be found in the PRs, the function will make additional api-calls to find them (due to pagination)
   * @default 3 -- this is arbitrary and can be changed in the future
   */
  limit?: number;
}

// Function to find pull requests for a list of commit SHAs using GraphQL
export async function findPullRequestsByMergeCommits({
  shas,
  octokit,
  limit = 3,
  repository,
}: FindPullRequestsByMergeCommitsParams) {
  const pullRequests = new Map<string, ImpactPluginResultEntry[]>();

  const payload = {
    page: 1,
    per_page: 100,
    ...repository,
    state: "closed" as const,
    sort: "updated" as const,
    direction: "desc" as const,
  };

  const spinner = logger.spinner(`retreiving pull requests (0/${shas.size})`);

  try {
    while (payload.page < limit) {
      const { data } = await octokit.pulls.list(payload);
      for (const pr of data) {
        if (!pr.merge_commit_sha || !shas.has(pr.merge_commit_sha)) {
          continue;
        }
        spinner.text = `retreiving pull requests (${pullRequests.size}/${shas.size})`;
        const existing = pullRequests.get(pr.merge_commit_sha) ?? [];
        existing.push({
          id: pr.number,
          title: pr.title,
          url: pr.html_url,
          origin: "github",
          description: pr.body ?? "",
        });
        pullRequests.set(pr.merge_commit_sha, existing);
      }
      if (shas.size === pullRequests.size) {
        break;
      }
      if (data.length < payload.per_page) {
        break;
      }
      payload.page++;
    }
    spinner.succeed(`found pull requests ${pullRequests.size}`);
    return pullRequests;
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    return new Map();
  }
}
