import { z } from "zod";
import { knownPluginNameSchema, pluginSchema } from "./plugins.js";
import { baseConfigSchema, type entrySchema } from "./private/shared.js";

export const impactConfigSchema = baseConfigSchema.extend({
  outputPriority: z.array(z.string()).optional(),
  plugins: z.array(
    z.union([pluginSchema, z.tuple([knownPluginNameSchema, z.unknown()])]),
  ),
});

export const publicImpactConfigSchema = impactConfigSchema.extend({});

export type Entry = z.infer<typeof entrySchema>;
export type BaseConfig = z.infer<typeof baseConfigSchema>;
export type ImpactConfig = z.infer<typeof impactConfigSchema>;
export type PublicImpactConfig = z.infer<typeof publicImpactConfigSchema>;
