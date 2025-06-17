import type { AugmentPlugin } from "@impacts/types/plugins";
import { LinearClient } from "@linear/sdk";
import { z } from "zod";
import { findIssues } from "./find-issues.js";
import { extractLinearFiltersFromUpdates } from "./utils.js";

const linearOptionsSchema = z.object({
  apiKey: z.string(),
  fields: z
    .object({
      project: z.boolean().optional(),
      milestone: z.boolean().optional(),
      dueDate: z.boolean().optional(),
      priority: z.boolean().optional(),
      estimate: z.boolean().optional(),
    })
    .optional(),
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
    awaits: ["github"],
    async augment(updates) {
      const linearClient = new LinearClient({
        apiKey,
      });

      const availableTeams = await linearClient.teams();
      const filters = extractLinearFiltersFromUpdates(
        updates,
        availableTeams.nodes.map((team) => team.key),
      );
      const issues = await findIssues({
        ...filters,
        linear: linearClient,
      });
      for (const update of updates.values()) {
        for (const issue of issues.get(update.id) ?? []) {
          update.references.push(issue);
        }
      }
    },
  };
}

export function createLinearPlugin(options: unknown) {
  return linear(linearOptionsSchema.parse(options));
}
