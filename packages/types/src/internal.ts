import { z } from "zod";
import { baseConfigSchema } from "./private/shared.js";

export const rawConfigSchema = baseConfigSchema.extend({
  id: z.string().optional(),
  plugins: z.array(z.any().or(z.tuple([z.string(), z.unknown()]))),
});
