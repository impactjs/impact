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
  augment: z.undefined(),
});

const augmentPluginSchema = basePluginSchema.extend({
  type: z.literal("augment"),
  awaits: z.array(z.string()).optional(),
  augment: z
    .function()
    .args(
      pluginContext,
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.promise(z.map(z.string(), z.array(impactPluginResultEntry)))),
});

const scanPluginSchema = basePluginSchema.extend({
  type: z.literal("scan"),
  shouldScan: z
    .function()
    .args(
      z.string(),
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.boolean()),
  scan: z
    .function()
    .args(
      z.string(),
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.promise(z.set(z.string()))),
});

export const knownPluginNameSchema = z.union([
  z.literal("github"),
  z.literal("linear"),
  z.literal("ecmascript"),
]);

export const pluginSchema = z.union([scanPluginSchema, augmentPluginSchema]);

export type Plugin = z.infer<typeof pluginSchema>;
export type PluginContext = z.infer<typeof pluginContext>;
export type ScanPlugin = z.infer<typeof scanPluginSchema>;
export type AugmentPlugin = z.infer<typeof augmentPluginSchema>;
