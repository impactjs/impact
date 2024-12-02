import { defineConfig } from "@pandacss/dev";
import { config } from "@impacts/styled-system/config";
export default defineConfig({ ...config, include: ["./src/**/*.{ts,tsx}"] });
