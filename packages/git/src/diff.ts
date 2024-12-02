import { simpleGit } from "simple-git";
import { join } from "node:path";
import { logger } from "@impact/logger";

const repo = simpleGit();

type GitDiffOptions = {
  remote?: string;
  branch?: string;
};

export async function getDiff(options: GitDiffOptions) {
  const spinner = logger.spinner("retrieving diff");
  const { remote = "origin", branch = "main" } = options;
  logger.debug(`remote: ${remote}, branch: ${branch}`);
  const diff = await repo.diffSummary([`${remote}/${branch}`]);
  spinner.text = "detecting root directory";
  const root = await repo.revparse(["--show-toplevel"]);
  spinner.succeed("diff retrieved");
  logger.debug(() =>
    JSON.stringify(
      {
        root,
        diff: diff.files.map((file) => file.file),
      },
      null,
      2,
    ),
  );
  return new Set(diff.files.map((file) => join(root, file.file)));
}

export async function listCommits(options: GitDiffOptions, files: Set<string>) {
  const { remote = "origin", branch = "main" } = options;
  const { current } = await repo.branch();
  const res = await Promise.all(
    Array.from(files).map((file) =>
      repo.log({
        from: `${remote}/${branch}`,
        to: current,
        file,
        multiLine: true,
      }),
    ),
  );
  return res.reduce((acc, val) => acc.concat(val.all), new Array());
}
