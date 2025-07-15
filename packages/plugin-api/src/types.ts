import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResultUpdate } from "@impacts/types/results";
import type { Runtime } from "@impacts/types/runtime";
import { z } from "zod";

// VCS Update schema for log hooks
export const vcsUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  timestamp: z.number(),
  files: z.array(
    z.object({
      path: z.string(),
      status: z.enum(["added", "modified", "deleted"]),
    }),
  ),
});

export type VcsUpdate = z.infer<typeof vcsUpdateSchema>;

type MaybePromise<T> = T | Promise<T>;

// Hook function types
export type ConfigHook = (config: ImpactConfig) => MaybePromise<ImpactConfig>;
export type ResolveIdHook = (
  id: string,
  importer: string,
  config: ImpactConfig,
) => MaybePromise<string | null>;
export type LoadHook = (
  id: string,
  config: ImpactConfig,
) => MaybePromise<Set<string>>;
export type LogHook = (
  file: string,
  config: ImpactConfig,
) => MaybePromise<Map<string, VcsUpdate>>;
export type VersionControlHook = (
  config: ImpactConfig,
) => MaybePromise<Map<string, VcsUpdate>>;
export type AugmentHook = (
  updates: Map<string, ImpactResultUpdate>,
  config: ImpactConfig,
) => MaybePromise<void>;

// Plugin validation schema
export const pluginSchema = z
  .object({
    name: z.string().min(1, "Plugin name is required"),
    config: z.function().optional(),
    resolveId: z.function().optional(),
    load: z.function().optional(),
    log: z.function().optional(),
    augment: z.function().optional(),
  })
  .refine(
    (plugin) => {
      // If resolveId is provided, load must also be provided
      const hasResolveId = typeof plugin.resolveId === "function";
      const hasLoad = typeof plugin.load === "function";

      if (hasResolveId && !hasLoad) {
        return false;
      }
      if (hasLoad && !hasResolveId) {
        return false;
      }

      return true;
    },
    {
      message:
        "Plugin must provide both resolveId and load hooks together, or neither",
    },
  );

// Plugin context for hook execution
export interface PluginContext {
  config: ImpactConfig;
  runtime: Runtime;
  allFiles: Set<string>;
  resolvedFiles: Map<string, Set<string>>; // file -> dependencies
  updates: Map<string, VcsUpdate[]>; // file -> updates
  finalUpdates: Map<string, ImpactResultUpdate>; // id -> update
}

// Plugin execution phases
export enum PluginPhase {
  CONFIG = "config",
  RESOLVE = "resolve",
  LOAD = "load",
  LOG = "log",
  AUGMENT = "augment",
}

// Plugin execution result
export interface PluginExecutionResult {
  phase: PluginPhase;
  plugin: string;
  success: boolean;
  error?: Error;
  duration: number;
}
