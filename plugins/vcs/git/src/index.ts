import { join } from "node:path";

import type { VcsPlugin } from "@impacts/types/plugins";
import type { Runtime } from "@impacts/types/runtime";
import { z } from "zod";

const gitOptionsSchema = z.object({
  /**
   *
   * @description Path to the tsconfig file
   */
  branch: z.string(),
});

type GitOptions = z.infer<typeof gitOptionsSchema>;

export function git(options: GitOptions): VcsPlugin {
  return {
    type: "vcs",
    name: "git",
    async files(_, runtime) {
      const { output, success } = await runtime.exec([
        "git",
        "diff",
        options.branch,
        "--name-only",
      ]);
      if (!success) {
        throw new Error("Failed to get git diff");
      }
      return new Set(
        output
          .split("\n")
          .filter((file) => !!file)
          .map((file) => join(process.cwd(), file.trim())),
      );
    },
    async updates(files, runtime) {
      const current = await getCurrentBranch(runtime);
      const { output } = await runtime.exec([
        "git",
        "log",
        "--pretty=format:%H::::%cI::::%an::::%s",
        [options.branch, current].join(".."),
        "--",
        ...Array.from(files),
      ]);
      return await Promise.all(
        output
          .toString()
          .split("\n")
          .filter(Boolean)
          .map((line) => {
            const [hash, date, author, message] = line.split("::::");
            return {
              date,
              author,
              id: hash,
              title: message,
              description: message,
            };
          })
          .map(async (update) => {
            const { output } = await runtime.exec([
              "git",
              "diff",
              "--name-status",
              update.id,
              "--",
              ...Array.from(files),
            ]);

            const concernedFiles = output
              .toString()
              .split("\n")
              .filter(Boolean)
              .map((line) => {
                const [status, file] = line.split(/\s+/);
                return {
                  status:
                    status === "A"
                      ? ("added" as const)
                      : status === "D"
                        ? ("deleted" as const)
                        : ("modified" as const),
                  path: join(process.cwd(), file.trim()),
                };
              });
            return {
              ...update,
              files: concernedFiles,
            };
          }),
      );
    },
  };
}

export function createGitPlugin(options: unknown) {
  return git(gitOptionsSchema.parse(options));
}

async function getCurrentBranch(runtime: Runtime) {
  const { output, success } = await runtime.exec([
    "git",
    "branch",
    "--show-current",
  ]);
  if (!success) {
    throw new Error("Failed to get current branch");
  }
  return output.trim();
}
