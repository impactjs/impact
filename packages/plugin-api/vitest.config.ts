import vitePluginVitestCache from "@raegen/vite-plugin-vitest-cache";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vitePluginVitestCache()],
  test: {
    environment: "node",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/**",
        "dist/**",
        "**/*.config.ts",
        "**/*.d.ts",
        "test/**",
        "tests/**",
        "__tests__/**",
        "**/__tests__/**",
        "**/*.test.ts",
        "**/*.spec.ts",
      ],
    },
    setupFiles: ["./src/_meta/setup.ts"],
  },
});
