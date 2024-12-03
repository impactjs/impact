import { z } from "zod";
import { pluginSchema } from "./plugins.js";
import { baseConfigSchema, type entrySchema } from "./private/shared.js";

export const impactConfigSchema = baseConfigSchema.extend({
  outputPriority: z.array(z.string()).optional(),
  plugins: z.array(pluginSchema),
});

export type Entry = z.infer<typeof entrySchema>;
export type BaseConfig = z.infer<typeof baseConfigSchema>;
export type ImpactConfig = z.infer<typeof impactConfigSchema>;
