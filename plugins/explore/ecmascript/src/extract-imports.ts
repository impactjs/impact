import { extname } from "node:path";
import type { Runtime } from "@impacts/types/runtime";
import { parse } from "es-module-lexer";
import { preprocess } from "./preprocess.js";

export async function extractImports(filename: string, runtime: Runtime) {
  const extension = extname(filename);
  switch (extension) {
    case ".jsx":
    case ".tsx":
    case ".vue":
    case ".astro":
    case ".svelte": {
      const content = await runtime.fs.read(filename);
      const processed = await preprocess(content, extension);
      const [imports] = parse(processed);
      return imports.map((imp) => imp.n).filter((n) => n !== undefined);
    }
    case ".ts":
    case ".mts":
    case ".js":
    case ".mjs": {
      const content = await runtime.fs.read(filename);
      const [imports] = parse(content);
      return imports.map((imp) => imp.n).filter((n) => n !== undefined);
    }
    default:
      return [];
  }
}
