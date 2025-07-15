import { createPlugin, type Plugin, type VcsUpdate } from "@impacts/plugin-api";
import z from "zod";
import { getCommits, getCurrentBranch, getFilesAndStatus } from "./utils.js";

const gitOptionsSchema = z.object({
  /**
   *
   * @description Path to the tsconfig file
   */
  baseBranch: z.string(),
});

type GitOptions = z.infer<typeof gitOptionsSchema>;

export function git(options: GitOptions): Plugin {
  return createPlugin({
    name: "@impacts/git",
    async versions() {
      const currentBranch = await getCurrentBranch();
      const commits = getCommits(options.baseBranch, currentBranch);

      const updates = new Map<string, VcsUpdate>(
        commits.map(
          (commit) =>
            [
              commit.id,
              {
                ...commit,
                files: getFilesAndStatus(commit.id),
              },
            ] as const,
        ),
      );

      return updates;
    },
  });
}

export function _impact_auto_create(options: unknown) {
  return git(gitOptionsSchema.parse(options));
}
