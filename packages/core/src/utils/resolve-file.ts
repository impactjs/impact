import er from "enhanced-resolve";
import fs from "node:fs";

const { create, CachedInputFileSystem } = er;

const fileSystem = new CachedInputFileSystem(fs, 9999999);

const resolver = create({
  fileSystem,
  conditionNames: ["require", "import", "node", "default"],
  extensions: [".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".mts", ".cts"],
});

export function resolve(specifier: string, basedir: string) {
  return new Promise<string | false | undefined>((res) => {
    resolver({}, basedir, specifier, {}, (err, result) => {
      if (err) {
        res(false);
      } else {
        res(result);
      }
    });
  });
}
