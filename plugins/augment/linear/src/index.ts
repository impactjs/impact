import type { AugmentPlugin } from "@impacts/types/plugins";
import { LinearClient } from "@linear/sdk";
import { z } from "zod";
import { finsIssues } from "./find-issues.js";
import { extractLinearFiltersFromContext } from "./utils.js";

const linearOptionsSchema = z.object({
  apiKey: z.string(),
});

type LinearOptions = z.infer<typeof linearOptionsSchema>;

export function linear(options: LinearOptions): AugmentPlugin {
  const apiKey = !options.apiKey
    ? undefined
    : options.apiKey.startsWith("env:")
      ? process.env[options.apiKey.slice(4)]
      : options.apiKey;
  return {
    type: "augment",
    name: "linear",
    async augment(context) {
      const linearClient = new LinearClient({
        apiKey,
      });
      const { teams, issues } = extractLinearFiltersFromContext(context);
      return await finsIssues({
        linear: linearClient,
        teams,
        issues,
      });
    },
  };
}

export function createLinearPlugin(options: unknown) {
  return linear(linearOptionsSchema.parse(options));
}
