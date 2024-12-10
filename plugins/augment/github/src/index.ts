import { Octokit } from "@octokit/rest";
import { findPullRequestsByMergeCommits } from "./find-pull-requests.js";
import type { AugmentPlugin } from "@impacts/types/plugins";
import { z } from "zod";

const githubOptionsSchema = z.object({
  /**
   * @description The github authentication token
   * @summary This is required to make authenticated api-calls to the github api
   * @optional -- if not provided, the plugin will make unauthenticated api-calls
   * @example "ghp_1234567890"
   */
  auth: z.string().optional(),

  /**
   * @description The owner of the repository
   * @example "octocat"
   */
  owner: z.string(),

  /**
   * @description The name of the repository
   * @example "hello-world"
   */
  repo: z.string(),

  /**
   * @description Limit the number of PRs to find
   * @summary This is used to limit the number of api-calls made to find the PRs
   * @default 3 -- this is arbitrary and can be changed in the future
   */
  limit: z.number().optional(),
});

type GithubOptions = z.infer<typeof githubOptionsSchema>;

export function github(options: GithubOptions): AugmentPlugin {
  const auth = !options.auth
    ? undefined
    : options.auth.startsWith("env:")
      ? process.env[options.auth.slice(4)]
      : options.auth;

  return {
    name: "github",
    type: "augment",
    async augment(context) {
      const octokit = new Octokit({
        auth,
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

export function createGithubPlugin(options: unknown) {
  return github(githubOptionsSchema.parse(options));
}
