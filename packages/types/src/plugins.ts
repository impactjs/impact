import { z } from "zod";

const basePluginSchema = z.object({
  name: z.string(),
  augment: z.undefined(),
});

export const vcsUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  timestamp: z.number(),
  files: z.array(
    z.object({
      path: z.string(),
      status: z.enum(["added", "modified", "deleted"]),
    }),
  ),
});

export const pluginContext = z.object({
  updates: z.map(z.string(), vcsUpdateSchema),
});

const augmentPluginSchema = basePluginSchema.extend({
  type: z.literal("augment"),
  awaits: z.array(z.string()).optional(),
});

const explorePluginSchema = basePluginSchema.extend({
  type: z.literal("explore"),
  shouldScan: z.function(),
  explore: z.function(),
});

export const knownPluginNameSchema = z.union([
  z.literal("git"),
  z.literal("github"),
  z.literal("linear"),
  z.literal("ecmascript"),
]);

export const pluginSchema = z.union([explorePluginSchema, augmentPluginSchema]);

export type Plugin = z.infer<typeof pluginSchema>;
export type VcsUpdate = z.infer<typeof vcsUpdateSchema>;
export type PluginContext = z.infer<typeof pluginContext>;
export type ScanPlugin = z.infer<typeof explorePluginSchema>;
export type AugmentPlugin = z.infer<typeof augmentPluginSchema>;
