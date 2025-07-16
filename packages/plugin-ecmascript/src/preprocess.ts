type Preprocessable = ".jsx" | ".tsx" | ".vue" | ".astro" | ".svelte";

type Parsers = {
  ".jsx": typeof import("esbuild");
  ".tsx": typeof import("esbuild");
  ".vue": typeof import("@vue/compiler-sfc");
  ".astro": typeof import("@astrojs/compiler");
  ".svelte": typeof import("svelte");
};

function getParser<T extends Preprocessable>(extension: T): Parsers[T] {
  switch (extension) {
    case ".jsx":
    case ".tsx": {
      return import.meta.require("esbuild");
    }
    case ".vue": {
      return import.meta.require("@vue/compiler-sfc");
    }
    case ".astro": {
      return import.meta.require("@astrojs/compiler");
    }
    case ".svelte": {
      return import.meta.require("svelte");
    }
    default: {
      throw new Error(`Unsupported extension: ${extension}`);
    }
  }
}
export async function preprocess(content: string, extension: Preprocessable) {
  switch (extension) {
    case ".jsx":
    case ".tsx": {
      const parser = getParser(extension);
      const result = await parser.transform(content, {
        format: "esm",
        loader: extension === ".jsx" ? "jsx" : "tsx",
      });
      return result.code;
    }
    case ".vue": {
      const parser = getParser(extension);
      const result = parser.parse(content);
      return [
        result.descriptor.script?.content,
        result.descriptor.scriptSetup?.content,
      ]
        .filter(Boolean)
        .join("\n");
    }
    case ".astro": {
      const parser = getParser(extension);
      const result = await parser.convertToTSX(content);
      return preprocess(result.code, ".tsx");
    }
    case ".svelte": {
      throw new Error("Svelte is not supported yet");
    }
  }
}
