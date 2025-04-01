import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import type { Runtime } from "@impacts/types/runtime";

export function createRuntime(): Runtime {
  return {
    exec([command, ...args]) {
      const response = spawnSync(command, args, {
        stdio: "pipe",
      });
      return {
        code: response.status ?? 1,
        success: response.status === 0,
        output: response.stdout.toString(),
      };
    },
    fs: {
      read(path) {
        return readFileSync(path, "utf-8");
      },
      write(path, content) {
        return writeFileSync(path, content, "utf-8");
      },
    },
  };
}
