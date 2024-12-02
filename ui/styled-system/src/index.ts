import { defineConfig, definePreset, defineUtility } from "@pandacss/dev";
import { semanticTokens, tokens } from "./tokens.js";
import { globalStyles } from "./global-styles.js";

export const preset = definePreset({
  name: "@impact/styled-system",

  conditions: {
    _light: "&.light",
    _dark: "&.dark",
  },

  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },
  globalCss: globalStyles,

  utilities: {
    size: defineUtility({
      values: "sizes",
      transform(value) {
        return {
          height: value,
          width: value,
        };
      },
    }),
  },
});

export const config = defineConfig({
  presets: ["@pandacss/dev/presets", preset],
  preflight: true,
  jsxFramework: "react",
  outdir: "styled-system",
  importMap: "@impact/styled-system",
});
