import { z } from "zod";
import { vcsUpdateSchema } from "./plugins.js";

export const baseImpactPluginResultEntry = z.object({
  title: z.string(),
  meta: z.array(z.string()),
  id: z.union([z.string(), z.number()]),
});

const gitPluginResultEntry = baseImpactPluginResultEntry.extend({
  author: z.string(),
  origin: z.literal("git"),
  files: z.array(
    z.object({
      path: z.string(),
      status: z.enum(["added", "modified", "deleted"]),
    }),
  ),
});

const githubPluginResultEntry = baseImpactPluginResultEntry.extend({
  url: z.string(),
  origin: z.literal("github"),
});

const linearPluginResultEntry = baseImpactPluginResultEntry.extend({
  url: z.string(),
  origin: z.literal("linear"),
});

export const impactPluginResultEntry = gitPluginResultEntry; // append vcs entries

export const impactPluginResultEntryReference = githubPluginResultEntry.or(
  linearPluginResultEntry,
);

const impactResultRawEntry = z.object({
  id: z.string(),
  path: z.string(),
  description: z.string(),
  diff: z.array(z.string()),
  updates: z.array(vcsUpdateSchema),
});

const impactResultSummaryUpdate = z.object({
  timestamp: z.number(),
  main: impactPluginResultEntry,
  references: z.array(impactPluginResultEntryReference),
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
export type ImpactPluginResultEntryReference = z.infer<
  typeof impactPluginResultEntryReference
>;
export type ImpactResultSummaryEntry = z.infer<typeof impactResultSummaryEntry>;
export type ImpactResultSummaryUpdate = z.infer<
  typeof impactResultSummaryUpdate
>;
