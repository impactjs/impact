import { config } from "@impacts/styled-system/config";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({ ...config, include: ["./src/**/*.{ts,tsx}"] });
