import { z } from "zod";
import { baseConfigSchema } from "./private/shared.js";
import { impactPluginResultEntryReference } from "./results.js";
import { runtimeSchema } from "./runtime.js";

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
});

const vcsPluginSchema = basePluginSchema.extend({
  type: z.literal("vcs"),
  files: z
    .function()
    .args(
      z.lazy(() => baseConfigSchema),
      runtimeSchema,
    )
    .returns(z.promise(z.set(z.string()))),
  updates: z
    .function()
    .args(z.set(z.string()), runtimeSchema)
    .returns(z.promise(z.array(vcsUpdateSchema))),
});

export const pluginContext = z.object({
  updates: z.map(z.string(), vcsUpdateSchema),
  plugins: z.record(
    z.map(z.string(), z.array(impactPluginResultEntryReference)),
  ),
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
    .returns(
      z.promise(z.map(z.string(), z.array(impactPluginResultEntryReference))),
    ),
});

const explorePluginSchema = basePluginSchema.extend({
  type: z.literal("explore"),
  shouldScan: z
    .function()
    .args(
      z.string(),
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.boolean()),
  explore: z
    .function()
    .args(
      z.string(),
      z.lazy(() => baseConfigSchema),
    )
    .returns(z.promise(z.set(z.string()))),
});

export const knownPluginNameSchema = z.union([
  z.literal("git"),
  z.literal("github"),
  z.literal("linear"),
  z.literal("ecmascript"),
]);

export const pluginSchema = z.union([
  explorePluginSchema,
  augmentPluginSchema,
  vcsPluginSchema,
]);

export type Plugin = z.infer<typeof pluginSchema>;
export type VcsUpdate = z.infer<typeof vcsUpdateSchema>;
export type VcsPlugin = z.infer<typeof vcsPluginSchema>;
export type PluginContext = z.infer<typeof pluginContext>;
export type ScanPlugin = z.infer<typeof explorePluginSchema>;
export type AugmentPlugin = z.infer<typeof augmentPluginSchema>;
