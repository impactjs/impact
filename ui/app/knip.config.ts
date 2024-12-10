import type { KnipConfig } from "knip";

export default {
  postcss: {
    config: ["postcss.config.cjs", "panda.config.ts"],
  },
} satisfies KnipConfig;
