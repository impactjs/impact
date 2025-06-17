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
  const diffCache = new Map<
    string,
    { status: "added" | "deleted" | "modified"; path: string }[]
  >();
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
      try {
        const current = await getCurrentBranch(runtime);
        const { output } = await runtime.exec([
          "git",
          "log",
          "--pretty=format:%H::::%cI::::%an::::%s::::%ai",
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
              const [hash, date, author, message, timestamp] =
                line.split("::::");
              return {
                date,
                author,
                id: hash,
                title: message,
                description: message,
                timestamp: new Date(timestamp).getTime(),
              };
            })
            .map(async (update) => {
              let diff = diffCache.get(update.id);
              if (!diff) {
                const { output } = await runtime.exec([
                  "git",
                  "diff",
                  "--name-status",
                  update.id,
                ]);
                diff = output
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
                diffCache.set(update.id, diff);
              }
              if (!diff) {
                console.log("no diff");
                return {
                  ...update,
                  files: [],
                };
              }

              const concernedFiles = diff
                .filter((file) => files.has(file.path))
                .map((file) => {
                  return {
                    status: file.status,
                    path: file.path,
                  };
                });
              return {
                ...update,
                files: concernedFiles,
              };
            }),
        );
      } catch (error) {
        console.error(error);
        return [];
      }
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
