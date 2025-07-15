import { readFile } from "node:fs/promises";
import { extname } from "node:path";
import { parse } from "es-module-lexer";
import { preprocess } from "./preprocess.js";

export async function extractImports(filename: string) {
  const extension = extname(filename);
  const content = await readFile(filename, "utf-8");
  switch (extension) {
    case ".jsx":
    case ".tsx":
    case ".vue":
    case ".astro":
    case ".svelte": {
      const processed = await preprocess(content, extension);
      const [imports] = parse(processed);
      return imports.map((imp) => imp.n).filter((n) => n !== undefined);
    }
    case ".ts":
    case ".mts":
    case ".js":
    case ".mjs": {
      const [imports] = parse(content);
      return imports.map((imp) => imp.n).filter((n) => n !== undefined);
    }
    default:
      return [];
  }
}
