import { logger } from "@impacts/logger";
import type { z } from "zod";
import type { Plugin } from "./plugin.js";
import type { PluginExecutionResult, PluginPhase } from "./types.js";
import { pluginSchema } from "./types.js";

/**
 * Validates a plugin against the plugin schema
 * @param plugin - The plugin to validate
 * @returns The validated plugin or throws an error
 */
export function validatePluginConfig(
  plugin: unknown,
): asserts plugin is z.infer<typeof pluginSchema> {
  const result = pluginSchema.safeParse(plugin);

  if (result.success) {
    return;
  }
  const errors = result.error.issues
    .map((issue) =>
      issue.path.length
        ? `${issue.path.join(".")} ${issue.message}`
        : issue.message,
    )
    .join(", ");
  throw new Error(`Plugin validation failed: ${errors}`);
}

/**
 * Measures the execution time of a plugin hook
 * @param pluginName - Name of the plugin
 * @param phase - The execution phase
 * @param hookFn - The hook function to execute
 * @returns The execution result with timing information
 */
export async function measureHookExecution<T>(
  pluginName: string,
  phase: PluginPhase,
  hookFn: () => Promise<T>,
): Promise<{ result: T; executionResult: PluginExecutionResult }> {
  const start = Date.now();

  try {
    const result = await hookFn();
    const duration = Date.now() - start;

    const executionResult: PluginExecutionResult = {
      phase,
      plugin: pluginName,
      success: true,
      duration,
    };

    logger.debug(
      `Plugin ${pluginName} ${phase} hook completed in ${duration}ms`,
    );

    return { result, executionResult };
  } catch (error) {
    const duration = Date.now() - start;

    const executionResult: PluginExecutionResult = {
      phase,
      plugin: pluginName,
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
      duration,
    };

    logger.error(
      `Plugin ${pluginName} ${phase} hook failed after ${duration}ms: ${error instanceof Error ? error.message : String(error)}`,
    );

    return { result: undefined as T, executionResult };
  }
}

/**
 * Creates a plugin execution summary from an array of execution results
 * @param results - Array of plugin execution results
 * @returns Summary object with statistics
 */
export function createExecutionSummary(results: PluginExecutionResult[]): {
  total: number;
  successful: number;
  failed: number;
  totalDuration: number;
  averageDuration: number;
  byPhase: Record<string, { count: number; duration: number }>;
} {
  const total = results.length;
  const successful = results.filter((r) => r.success).length;
  const failed = total - successful;
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);
  const averageDuration = total > 0 ? totalDuration / total : 0;

  const byPhase: Record<string, { count: number; duration: number }> = {};

  for (const result of results) {
    if (!byPhase[result.phase]) {
      byPhase[result.phase] = { count: 0, duration: 0 };
    }
    byPhase[result.phase].count++;
    byPhase[result.phase].duration += result.duration;
  }

  return {
    total,
    successful,
    failed,
    totalDuration,
    averageDuration,
    byPhase,
  };
}

/**
 * Validates that plugin names are unique
 * @param plugins - Array of plugins to validate
 * @throws Error if duplicate plugin names are found
 */
export function validateUniquePluginNames(plugins: Plugin[]): void {
  const names = new Set<string>();
  const duplicates: string[] = [];

  for (const plugin of plugins) {
    if (names.has(plugin.name)) {
      duplicates.push(plugin.name);
    } else {
      names.add(plugin.name);
    }
  }

  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate plugin names found: ${duplicates.join(", ")}. ` +
        "Each plugin must have a unique name.",
    );
  }
}
