import { logger } from "@impacts/logger";
import { join } from "node:path";

export class Git {
  private _root?: string;
  private _currentBranch?: string;

  constructor(private base: string) {
    logger.debug(`using base branch: ${base}`);
  }

  public get root() {
    if (this._root) {
      return this._root;
    }
    const result = Bun.spawnSync({
      cmd: ["git", "rev-parse", "--show-toplevel"],
      stdout: "pipe",
      stderr: "pipe",
    });
    if (!result.success) {
      throw new Error(result.stderr.toString());
    }
    this._root = result.stdout.toString().trim();
    return this._root;
  }

  public get currentBranch() {
    if (this._currentBranch) {
      return this._currentBranch;
    }
    const result = Bun.spawnSync({
      cmd: ["git", "branch", "--show-current"],
      stdout: "pipe",
      stderr: "pipe",
    });
    if (!result.success) {
      throw new Error(result.stderr.toString());
    }
    this._currentBranch = result.stdout.toString().trim();
    return this._currentBranch;
  }

  public async assertClean() {
    const result = Bun.spawnSync({
      cmd: ["git", "status", "--porcelain"],
      stdout: "pipe",
      stderr: "pipe",
    });
    if (!result.success) {
      throw new Error(result.stderr.toString());
    }
    if (result.stdout.toString().trim().length > 0) {
      logger.warn("working directory is not clean");
    }
  }

  public log(
    files?: Iterable<string>,
  ): Array<{ hash: string; date: string; author: string; message: string }> {
    const cmd = [
      "git",
      "log",
      "--pretty=format:%H::::%cI::::%an::::%s",
      [this.base, this.currentBranch].join(".."),
      "--",
      ...(files ?? []),
    ];

    logger.debug(`running: ${cmd.join(" ")}`);

    const result = Bun.spawnSync({ cmd, stdout: "pipe", stderr: "pipe" });
    if (!result.success) {
      throw new Error(result.stderr.toString());
    }

    return result.stdout
      .toString()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [hash, date, author, message] = line.split("::::");
        return { hash, date, author, message };
      });
  }

  public diff(): Set<string> {
    const result = Bun.spawnSync({
      cmd: ["git", "diff", this.base, "--name-only"].flat(),
      stdout: "pipe",
      stderr: "pipe",
    });
    if (!result.success) {
      throw new Error(result.stderr.toString());
    }
    return new Set(
      result.stdout
        .toString()
        .split("\n")
        .filter(Boolean)
        .map((line) => join(this.root, line)),
    );
  }
}
