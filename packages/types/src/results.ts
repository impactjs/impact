import { z } from "zod";
import { commitSchema } from "./git.js";

export const baseImpactPluginResultEntry = z.object({
  title: z.string(),
  id: z.union([z.string(), z.number()]),
});

export const impactPluginResultEntry = z.union([
  baseImpactPluginResultEntry.extend({
    origin: z.literal("git"),
  }),
  baseImpactPluginResultEntry.extend({
    url: z.string(),
    description: z.string(),
    origin: z.literal("github"),
  }),
  baseImpactPluginResultEntry.extend({
    url: z.string(),
    description: z.string(),
    origin: z.literal("linear"),
    project: z.string().nullable().optional(),
    milestone: z.string().nullable().optional(),
    dueDate: z.string().nullable().optional(),
    priority: z.number().nullable().optional(),
    estimate: z.number().nullable().optional(),
  }),
]);

const impactResultRawEntry = z.object({
  id: z.string(),
  path: z.string(),
  description: z.string(),
  diff: z.array(z.string()),
  commits: z.array(commitSchema),
});

const impactResultSummaryUpdate = z.object({
  origin: z.string(),
  timestamp: z.number(),
  main: impactPluginResultEntry,
  references: z.array(impactPluginResultEntry),
});

const impactResultSummaryEntry = z.object({
  id: z.string(),
  description: z.string(),
  path: z.string(),
  updates: z.array(impactResultSummaryUpdate),
});

export const impactResultSchema = z.object({
  raw: z.array(impactResultRawEntry),
  entrypoints: z.array(impactResultSummaryEntry),
});

export type ImpactResult = z.infer<typeof impactResultSchema>;
export type ImpactResultRawEntry = z.infer<typeof impactResultRawEntry>;
export type ImpactPluginResultEntry = z.infer<typeof impactPluginResultEntry>;
export type ImpactResultSummaryEntry = z.infer<typeof impactResultSummaryEntry>;
export type ImpactResultSummaryUpdate = z.infer<
  typeof impactResultSummaryUpdate
>;
