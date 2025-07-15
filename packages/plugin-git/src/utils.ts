import { execSync } from "node:child_process";

export async function getCurrentBranch() {
  const output = execSync("git branch --show-current");
  return output.toString().trim();
}

export function getCommits(baseBranch: string, currentBranch: string) {
  const output = execSync(
    `git log --pretty=format:%H::::%cI::::%an::::%s::::%ai ${baseBranch}..${currentBranch}`,
  );
  return output
    .toString()
    .trim()
    .split("\n")
    .map((line) => {
      const [hash, date, author, message, timestamp] = line.split("::::");
      return {
        id: hash,
        date,
        author,
        title: message,
        description: message,
        timestamp: new Date(timestamp).getTime(),
      };
    });
}

enum FileStatus {
  Added = "added",
  Deleted = "deleted",
  Modified = "modified",
}

export function getFilesAndStatus(commitId: string) {
  const output = execSync(
    `git diff-tree --no-commit-id --name-status -r ${commitId}`,
  );
  return output
    .toString()
    .trim()
    .split("\n")
    .map((line) => {
      const [status, path] = line.split("\t");
      return {
        path,
        status:
          status === "A"
            ? FileStatus.Added
            : status === "D"
              ? FileStatus.Deleted
              : FileStatus.Modified,
      };
    });
}
