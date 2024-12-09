import { z } from "zod";
export const entrySchema = z.object({
  id: z.string(),
  path: z.string(),
  description: z.string(),
});

export const baseConfigSchema = z.object({
  entries: z.array(entrySchema),
  branch: z.string().optional(),
  outfile: z.string().optional(),
  ignore: z.array(z.string()).optional(),
  format: z.union([z.literal("json"), z.literal("yaml")]).optional(),
});
