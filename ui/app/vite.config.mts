import { extname, join, resolve } from "node:path";
import { defineConfig } from "vite";
import { readFileSync, writeFileSync } from "node:fs";

export default defineConfig({
  plugins: [
    {
      name: "update-pkg-json-exports",
      apply: "build",
      writeBundle(options, bundle) {
        const pkgJsonPath = resolve(__dirname, "package.json");
        const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
        const exports = {};
        for (const [fileName, chunkInfo] of Object.entries(bundle)) {
          const fileType = extname(fileName);
          exports[fileType.replace(/^\./, "")] = `./${join(
            "./dist",
            `./${fileName}`,
          )}`;
        }
        pkgJson.exports = exports;
        writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
      },
    },
  ],
});
