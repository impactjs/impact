import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "update-pkg-json-exports",
      apply: "build",
      writeBundle(_, bundle) {
        const pkgJsonPath = resolve(__dirname, "package.json");
        const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
        const exports = {};
        for (const [fileName] of Object.entries(bundle)) {
          const fileType = extname(fileName);
          exports[fileType.replace(/^\./, "")] = `./${join(
            "./dist",
            `./${fileName}`,
          )}`;
          // write the file to the dist folder (with filename index.ext)
          copyFileSync(
            join("dist", fileName),
            join("dist", `./index${fileType}`),
          );
        }
        pkgJson.exports = exports;
        writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
      },
    },
  ],
});
