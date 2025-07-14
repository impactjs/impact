// Import types needed for function signatures
import type { ImpactConfig } from "@impacts/types/config";
import type { Runtime } from "@impacts/types/runtime";
import { PluginOrchestrator } from "./orchestrator.js";

// Re-export commonly used types from @impacts/types for convenience
export type { ImpactConfig } from "@impacts/types/config";
export type { ImpactResultUpdate } from "@impacts/types/results";
export type { Runtime } from "@impacts/types/runtime";
// Core plugin system
// Plugin types and interfaces
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
// Plugin utilities
export {
  createExecutionSummary,
  measureHookExecution,
  validatePluginConfig,
  validateUniquePluginNames,
} from "./utils.js";

/**
 * Creates a new plugin orchestrator instance
 * @param config - The Impact configuration
 * @param runtime - The runtime environment
 * @returns A new PluginOrchestrator instance
 */
export function createPluginOrchestrator(
  config: ImpactConfig,
  runtime: Runtime,
): PluginOrchestrator {
  return new PluginOrchestrator(config, runtime);
}

export { PluginOrchestrator } from "./orchestrator.js";
export { createPlugin, Plugin } from "./plugin.js";
