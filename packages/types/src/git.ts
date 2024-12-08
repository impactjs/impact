import { z } from "zod";

export const commitSchema = z.object({
  hash: z.string(),
  message: z.string(),
  date: z.string(),
  author: z.string(),
});

export type Commit = z.infer<typeof commitSchema>;
