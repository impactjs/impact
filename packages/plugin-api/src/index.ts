import type { ImpactConfig } from "@impacts/types/config";
import { PluginOrchestrator } from "./orchestrator.js";

export type { ImpactConfig } from "@impacts/types/config";
export type { ImpactResultUpdate } from "@impacts/types/results";
export type { Runtime } from "@impacts/types/runtime";

export type {
  AugmentHook,
  ConfigHook,
  LoadHook,
  LogHook,
  PluginContext,
  PluginExecutionResult,
  ResolveIdHook,
  VcsUpdate,
} from "./types.js";
export { PluginPhase, pluginSchema, vcsUpdateSchema } from "./types.js";
export {
  createExecutionSummary,
  measureHookExecution,
  validatePluginConfig,
  validateUniquePluginNames,
} from "./utils.js";

export function createPluginOrchestrator(
  config: ImpactConfig,
): PluginOrchestrator {
  return new PluginOrchestrator(config);
}

export { PluginOrchestrator } from "./orchestrator.js";
export { createPlugin, Plugin } from "./plugin.js";
