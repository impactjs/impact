import { Octokit } from "@octokit/rest";
import {
  findPullRequestsByMergeCommits,
  type FindPullRequestsByMergeCommitsParams,
} from "./find-pull-requests.js";
import type { Plugin } from "@impact/types/plugins";

type GithubOptions = {
  auth: string;
} & FindPullRequestsByMergeCommitsParams["repository"] &
  Pick<FindPullRequestsByMergeCommitsParams, "limit">;

export function github(options: GithubOptions): Plugin {
  return {
    name: "github",
    async transform(context) {
      const octokit = new Octokit({
        auth: options.auth,
      });
      return await findPullRequestsByMergeCommits({
        octokit,
        repository: {
          owner: options.owner,
          repo: options.repo,
        },
        limit: options.limit,
        shas: new Set(context.commits.keys()),
      });
    },
  };
}
