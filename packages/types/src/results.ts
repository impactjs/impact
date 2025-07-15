import { z } from "zod";

const fileEntry = z.object({
  path: z.string(),
  status: z.enum(["added", "modified", "deleted"]),
});

// VCS
export const baseVcsResultEntry = z.object({
  id: z.string(),
  title: z.string(),
  meta: z.array(z.string()),
});
const gitResultEntry = baseVcsResultEntry.extend({
  author: z.string(),
  timestamp: z.number(),
});

const vcsResultEntry = gitResultEntry; // .or(anotherVcsResultEntry)

// AUGMENT

const baseAugmentResultEntry = z.object({
  title: z.string(),
  meta: z.array(z.string()),
  id: z.union([z.string(), z.number()]),
});

const githubResultEntry = baseAugmentResultEntry.extend({
  url: z.string(),
  origin: z.literal("github"),
});
const linearResultEntry = baseAugmentResultEntry.extend({
  url: z.string(),
  origin: z.literal("linear"),
});

export const updateReferenceSchema = githubResultEntry.or(linearResultEntry);

// ENTRY

export const updateSchema = z
  .object({
    references: z.array(updateReferenceSchema),
  })
  .and(vcsResultEntry); // append vcs entries (replace the second gitPluginResultEntry with any)

const entryResultSchema = z.object({
  path: z.string(),
  description: z.string(),
  updates: z.array(z.string()),
});

export const impactResultSchema = z.object({
  updates: z.record(
    updateSchema.and(
      z.object({
        references: z.array(updateReferenceSchema),
      }),
    ),
  ),
  files: z.record(fileEntry),
  entries: z.array(entryResultSchema),
});

export type ImpactResultFile = z.infer<typeof fileEntry>;
export type ImpactResult = z.infer<typeof impactResultSchema>;
export type ImpactResultUpdate = z.infer<typeof updateSchema>;
export type ImpactResultEntry = z.infer<typeof entryResultSchema>;
export type ImpactResultUpdateReference = z.infer<typeof updateReferenceSchema>;
