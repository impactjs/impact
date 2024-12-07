import { extractLinearFiltersFromContext } from "./utils.js";
import type { AugmentPlugin } from "@impacts/types/plugins";
import { finsIssues } from "./find-issues.js";
import { LinearClient } from "@linear/sdk";
import { z } from "zod";

const linearOptionsSchema = z.object({
  apiKey: z.string(),
});

type LinearOptions = z.infer<typeof linearOptionsSchema>;

export function linear(options: LinearOptions): AugmentPlugin {
  return {
    type: "augment",
    name: "linear",
    async augment(context) {
      const linearClient = new LinearClient({
        apiKey: options.apiKey,
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
