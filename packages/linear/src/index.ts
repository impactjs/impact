import { logger } from "@impacts/logger";
import { extractLinearFiltersFromContext } from "./utils.js";
import type { Plugin } from "@impacts/types/plugins";
import { finsIssues } from "./find-issues.js";
import { LinearClient } from "@linear/sdk";

type LinearOptions = {
  workspace: string;
  apiKey: string;
};

export function linear(options: LinearOptions): Plugin {
  logger.debug(`using workspace: ${options.workspace}`);
  return {
    name: "linear",
    async transform(context) {
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
