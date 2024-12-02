import { defineConfig } from "@pandacss/dev";
import { config } from "@impact/styled-system/config";
export default defineConfig({ ...config, include: ["./src/**/*.{ts,tsx}"] });
