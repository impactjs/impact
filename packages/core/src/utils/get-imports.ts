import { parse } from "@swc/core";
import { readFileSync } from "node:fs";
import { simple } from "swc-walk";

export async function getImports(path: string) {
  try {
    const content = readFileSync(path, "utf-8");
    const ast = await parse(content, {
      syntax: "typescript",
      tsx: true,
    });
    const imports: string[] = [];
    simple(ast, {
      ImportDeclaration(node) {
        imports.push(node.source.value);
      },
      ExportNamedDeclaration(node) {
        if (!node.source) return;
        imports.push(node.source.value);
      },
      ExportAllDeclaration(node) {
        imports.push(node.source.value);
      },
    });
    return imports;
  } catch {
    console.warn(`[impact]: failed to get imports from ${path}`);
    return [];
  }
}
