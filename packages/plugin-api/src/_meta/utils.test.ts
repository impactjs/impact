import { describe, expect, it, vi } from "vitest";
import { createPlugin } from "../plugin.js";
import type { PluginExecutionResult } from "../types.js";
import { PluginPhase } from "../types.js";
import {
  createExecutionSummary,
  measureHookExecution,
  validatePluginConfig,
  validateUniquePluginNames,
} from "../utils.js";

describe("validatePluginConfig", () => {
  it("should validate a valid plugin", () => {
    const validPlugin = {
      name: "test-plugin",
      config: vi.fn(),
    };

    expect(() => validatePluginConfig(validPlugin)).not.toThrow();
  });

  it("should throw error for invalid plugin", () => {
    const invalidPlugin = {
      // Missing name
      config: vi.fn(),
    };

    expect(() => validatePluginConfig(invalidPlugin)).toThrow(
      "Plugin validation failed",
    );
  });

  it("should throw error for plugin violating resolveId/load coupling", () => {
    const invalidPlugin = {
      name: "invalid-plugin",
      resolveId: vi.fn(),
      // Missing load
    };

    expect(() => validatePluginConfig(invalidPlugin)).toThrow(
      "both resolveId and load hooks together",
    );
  });
});

describe("validateUniquePluginNames", () => {
  it("should pass for plugins with unique names", () => {
    const plugins = [
      createPlugin({ name: "plugin1" }),
      createPlugin({ name: "plugin2" }),
      createPlugin({ name: "plugin3" }),
    ];

    expect(() => validateUniquePluginNames(plugins)).not.toThrow();
  });

  it("should throw error for duplicate plugin names", () => {
    const plugins = [
      createPlugin({ name: "plugin1" }),
      createPlugin({ name: "plugin2" }),
      createPlugin({ name: "plugin1" }), // Duplicate
    ];

    expect(() => validateUniquePluginNames(plugins)).toThrow(
      "Duplicate plugin names found: plugin1",
    );
  });

  it("should throw error for multiple duplicate plugin names", () => {
    const plugins = [
      createPlugin({ name: "plugin1" }),
      createPlugin({ name: "plugin2" }),
      createPlugin({ name: "plugin1" }), // Duplicate
      createPlugin({ name: "plugin2" }), // Duplicate
    ];

    expect(() => validateUniquePluginNames(plugins)).toThrow(
      "Duplicate plugin names found: plugin1, plugin2",
    );
  });
});

describe("measureHookExecution", () => {
  it("should measure successful hook execution", async () => {
    const mockHook = vi.fn().mockResolvedValue("success");

    const { result, executionResult } = await measureHookExecution(
      "test-plugin",
      PluginPhase.CONFIG,
      mockHook,
    );

    expect(result).toBe("success");
    expect(executionResult.plugin).toBe("test-plugin");
    expect(executionResult.phase).toBe(PluginPhase.CONFIG);
    expect(executionResult.success).toBe(true);
    expect(executionResult.duration).toBeGreaterThanOrEqual(0);
    expect(executionResult.error).toBeUndefined();
  });

  it("should measure failed hook execution", async () => {
    const error = new Error("Hook failed");
    const mockHook = vi.fn().mockRejectedValue(error);

    const { result, executionResult } = await measureHookExecution(
      "test-plugin",
      PluginPhase.CONFIG,
      mockHook,
    );

    expect(result).toBeUndefined();
    expect(executionResult.plugin).toBe("test-plugin");
    expect(executionResult.phase).toBe(PluginPhase.CONFIG);
    expect(executionResult.success).toBe(false);
    expect(executionResult.duration).toBeGreaterThanOrEqual(0);
    expect(executionResult.error).toBe(error);
  });

  it("should handle non-Error rejections", async () => {
    const mockHook = vi.fn().mockRejectedValue("String error");

    const { result, executionResult } = await measureHookExecution(
      "test-plugin",
      PluginPhase.CONFIG,
      mockHook,
    );

    expect(result).toBeUndefined();
    expect(executionResult.success).toBe(false);
    expect(executionResult.error).toBeInstanceOf(Error);
    expect(executionResult.error?.message).toBe("String error");
  });
});

describe("createExecutionSummary", () => {
  it("should create execution summary from results", () => {
    const results: PluginExecutionResult[] = [
      {
        phase: PluginPhase.CONFIG,
        plugin: "plugin1",
        success: true,
        duration: 100,
      },
      {
        phase: PluginPhase.CONFIG,
        plugin: "plugin2",
        success: false,
        duration: 50,
        error: new Error("Failed"),
      },
      {
        phase: PluginPhase.RESOLVE,
        plugin: "plugin1",
        success: true,
        duration: 200,
      },
    ];

    const summary = createExecutionSummary(results);

    expect(summary.total).toBe(3);
    expect(summary.successful).toBe(2);
    expect(summary.failed).toBe(1);
    expect(summary.totalDuration).toBe(350);
    expect(summary.averageDuration).toBe(350 / 3);

    expect(summary.byPhase.config.count).toBe(2);
    expect(summary.byPhase.config.duration).toBe(150);
    expect(summary.byPhase.resolve.count).toBe(1);
    expect(summary.byPhase.resolve.duration).toBe(200);
  });

  it("should handle empty results", () => {
    const results: PluginExecutionResult[] = [];
    const summary = createExecutionSummary(results);

    expect(summary.total).toBe(0);
    expect(summary.successful).toBe(0);
    expect(summary.failed).toBe(0);
    expect(summary.totalDuration).toBe(0);
    expect(summary.averageDuration).toBe(0);
    expect(summary.byPhase).toEqual({});
  });
});
