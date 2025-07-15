import { Plugin } from "@impacts/plugin-api/plugin";
import { z } from "zod";
import { baseConfigSchema, type entrySchema } from "./private/shared.js";

export const globalImpactconfigSchema = z.object({
  secret: z.string().optional(),
  pluginAuth: z.record(z.string()).optional(),
});

export const rawConfigSchema = baseConfigSchema.extend({
  id: z.string().optional(),
  plugins: z.array(z.instanceof(Plugin).or(z.tuple([z.string(), z.unknown()]))),
});

export const impactConfigSchema = baseConfigSchema.extend({
  id: z.string().optional(),
  plugins: z.array(z.instanceof(Plugin)),
});

export const publicImpactConfigSchema = impactConfigSchema.extend({});

export type Entry = z.infer<typeof entrySchema>;
export type BaseConfig = z.infer<typeof baseConfigSchema>;
export type ImpactConfig = z.infer<typeof impactConfigSchema>;
export type PublicImpactConfig = z.infer<typeof publicImpactConfigSchema>;

export type GlobalImpactConfig = z.infer<typeof globalImpactconfigSchema>;
