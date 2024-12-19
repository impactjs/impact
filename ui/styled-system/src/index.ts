import { defineConfig, definePreset, defineUtility } from "@pandacss/dev";
import { globalStyles } from "./global-styles.js";
import { semanticTokens, tokens } from "./tokens.js";

export const preset = definePreset({
  name: "@impacts/styled-system",

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
  importMap: "@impacts/styled-system",
});
