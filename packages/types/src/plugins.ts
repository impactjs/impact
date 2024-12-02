import { z } from "zod";
import { commitSchema } from "./git.js";
import { baseConfigSchema } from "./private/shared.js";
import { impactPluginResultEntry } from "./results.js";

export const pluginContext = z.object({
  commits: z.map(z.string(), commitSchema),
  plugins: z.record(z.map(z.string(), z.array(impactPluginResultEntry))),
});

const basePluginSchema = z.object({
  name: z.string(),
  transform: z.undefined(),
  awaits: z.array(z.string()).optional(),
});

const transformPluginSchema = basePluginSchema.extend({
  transform: z
    .function()
    .args(
      pluginContext,
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.promise(z.map(z.string(), z.array(impactPluginResultEntry)))),
});

export const pluginSchema = z.union([basePluginSchema, transformPluginSchema]);

export type Plugin = z.infer<typeof pluginSchema>;
export type PluginContext = z.infer<typeof pluginContext>;
export type TransformPlugin = z.infer<typeof transformPluginSchema>;
