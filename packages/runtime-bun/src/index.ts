import type { Runtime } from "@impacts/types/runtime";

export function createRuntime(): Runtime {
  return {
    exec(command) {
      const response = Bun.spawnSync({
        cmd: command,
        stdio: ["inherit", "pipe", "pipe"],
      });
      return {
        code: response.exitCode,
        success: response.success,
        output: response.stdout.toString(),
      };
    },
    fs: {
      read(path) {
        return Bun.file(path).text();
      },
      write(path, content) {
        return Bun.write(path, content);
      },
    },
  };
}
