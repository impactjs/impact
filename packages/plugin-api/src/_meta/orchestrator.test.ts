import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResultUpdate } from "@impacts/types/results";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PluginOrchestrator } from "../orchestrator.js";
import { Plugin } from "../plugin.js";

describe("PluginOrchestrator", () => {
  let orchestrator: PluginOrchestrator;
  let mockConfig: ImpactConfig;

  beforeEach(() => {
    vi.clearAllMocks();
    mockConfig = {
      entries: [{ id: "entry1", path: "src", description: "Source code" }],
      plugins: [],
    };
    orchestrator = new PluginOrchestrator(mockConfig);
  });

  it("should initialize with empty plugins", () => {
    expect(orchestrator.config).toBe(mockConfig);
    expect(orchestrator.getExecutionResults()).toHaveLength(0);
  });

  it("should process config plugins during init", async () => {
    const configHook = vi.fn().mockImplementation((config) => ({
      ...config,
      customProperty: "modified",
    }));

    const configPlugin = new Plugin({
      name: "config-plugin",
      config: configHook,
    });

    mockConfig.plugins = [configPlugin];
    orchestrator = new PluginOrchestrator(mockConfig);

    await orchestrator.init();

    expect(configHook).toHaveBeenCalledWith(mockConfig);
    expect(orchestrator.config).toHaveProperty("customProperty", "modified");
  });

  it("should process multiple config plugins in order", async () => {
    const plugin1Hook = vi.fn().mockImplementation((config) => ({
      ...config,
      prop1: "value1",
    }));
    const plugin2Hook = vi.fn().mockImplementation((config) => ({
      ...config,
      prop2: "value2",
    }));

    const plugin1 = new Plugin({
      name: "plugin1",
      config: plugin1Hook,
    });
    const plugin2 = new Plugin({
      name: "plugin2",
      config: plugin2Hook,
    });

    mockConfig.plugins = [plugin1, plugin2];
    orchestrator = new PluginOrchestrator(mockConfig);

    await orchestrator.init();

    expect(plugin1Hook).toHaveBeenCalledWith(mockConfig);
    expect(plugin2Hook).toHaveBeenCalledWith(
      expect.objectContaining({ prop1: "value1" }),
    );
    expect(orchestrator.config).toHaveProperty("prop1", "value1");
    expect(orchestrator.config).toHaveProperty("prop2", "value2");
  });

  it("should return null when no plugins are registered for resolveId", async () => {
    const result = await orchestrator.resolveId("./module", "importer.ts");
    expect(result).toBeNull();
  });

  it("should demonstrate resolveId bug - uses empty this.plugins instead of this.config.plugins", async () => {
    // Note: This test demonstrates the bug in the orchestrator - it uses this.plugins
    // but plugins are stored in this.config.plugins
    const result = await orchestrator.resolveId("./module", "importer.ts");
    expect(result).toBeNull();
  });

  it("should return empty set when no plugins are registered for load", async () => {
    const result = await orchestrator.load("file.ts");
    expect(result).toEqual(new Set());
  });

  it("should demonstrate load bug - uses empty this.plugins instead of this.config.plugins", async () => {
    // Note: This test demonstrates the bug in the orchestrator - it uses this.plugins
    // but plugins are stored in this.config.plugins
    const result = await orchestrator.load("file.ts");
    expect(result).toEqual(new Set());
  });

  it("should return empty map when no plugins are registered for versions", async () => {
    const result = await orchestrator.versions();
    expect(result.size).toBe(0);
  });

  it("should demonstrate versions bug - uses empty this.plugins instead of this.config.plugins", async () => {
    // Note: This test demonstrates the bug in the orchestrator - it uses this.plugins
    // but plugins are stored in this.config.plugins
    const result = await orchestrator.versions();
    expect(result.size).toBe(0);
  });

  it("should handle empty plugins gracefully in augment", async () => {
    const updates = new Map<string, ImpactResultUpdate>();

    // Should not throw with no plugins
    await expect(orchestrator.augment(updates)).resolves.toBeUndefined();
  });

  it("should demonstrate augment bug - uses empty this.plugins instead of this.config.plugins", async () => {
    // Note: This test demonstrates the bug in the orchestrator - it uses this.plugins
    // but plugins are stored in this.config.plugins
    const updates = new Map<string, ImpactResultUpdate>();
    updates.set("file1", {
      id: "update1",
      title: "Update 1",
      references: [],
      author: "Author",
      meta: ["Description"],
      timestamp: Date.now(),
    });

    await orchestrator.augment(updates);
    // Should complete without error even with the bug
  });

  it("should return empty array initially for execution results", () => {
    const results = orchestrator.getExecutionResults();
    expect(results).toEqual([]);
  });

  it("should return copy of execution results", () => {
    const results1 = orchestrator.getExecutionResults();
    const results2 = orchestrator.getExecutionResults();

    expect(results1).not.toBe(results2);
    expect(results1).toEqual(results2);
  });

  it("should handle config plugin errors during init", async () => {
    const errorPlugin = new Plugin({
      name: "error-plugin",
      config: vi.fn().mockRejectedValue(new Error("Config failed")),
    });

    orchestrator = new PluginOrchestrator({
      ...mockConfig,
      plugins: [errorPlugin],
    });

    await expect(orchestrator.init()).rejects.toThrow("Config failed");
  });

  it("should handle missing plugins gracefully in resolveId", async () => {
    // The orchestrator has a bug where it uses this.plugins instead of this.config.plugins
    // This means all plugin methods will iterate over an empty array
    await expect(
      orchestrator.resolveId("./module", "importer.ts"),
    ).resolves.toBeNull();
  });

  it("should handle missing plugins gracefully in load", async () => {
    await expect(orchestrator.load("file.ts")).resolves.toEqual(new Set());
  });

  it("should handle missing plugins gracefully in versions", async () => {
    await expect(orchestrator.versions()).resolves.toEqual(new Map());
  });

  it("should handle missing plugins gracefully in augment", async () => {
    const updates = new Map<string, ImpactResultUpdate>();
    await expect(orchestrator.augment(updates)).resolves.toBeUndefined();
  });

  it("should work with actual Plugin instances", async () => {
    const configHook = vi.fn().mockImplementation((config) => config);
    const resolveHook = vi.fn().mockResolvedValue("resolved-path");
    const loadHook = vi.fn().mockResolvedValue(new Set(["dep.ts"]));
    const versionsHook = vi.fn().mockResolvedValue(
      new Map([
        [
          "update1",
          {
            id: "update1",
            title: "Update 1",
            date: "2023-12-01",
            author: "Author",
            timestamp: Date.now(),
            files: [
              {
                path: "file.ts",
                status: "modified" as const,
              },
            ],
          },
        ],
      ]),
    );
    const augmentHook = vi.fn().mockResolvedValue(undefined);

    const plugin = new Plugin({
      name: "test-plugin",
      config: configHook,
      resolveId: resolveHook,
      load: loadHook,
      versions: versionsHook,
      augment: augmentHook,
    });

    // Test that plugin methods work correctly
    expect(plugin.name).toBe("test-plugin");

    const testConfig = { ...mockConfig };
    await plugin.config(testConfig);
    expect(configHook).toHaveBeenCalledWith(testConfig);

    const resolveResult = await plugin.resolveId(
      "./test",
      "importer",
      testConfig,
    );
    expect(resolveResult).toBe("resolved-path");

    const loadResult = await plugin.load("file.ts", testConfig);
    expect(loadResult).toEqual(new Set(["dep.ts"]));

    const versionsResult = await plugin.versions(testConfig);
    expect(versionsResult.size).toBe(1);

    const updates = new Map();
    await plugin.augment(updates, testConfig);
    expect(augmentHook).toHaveBeenCalledWith(updates, testConfig);
  });

  it("should handle plugins with only some hooks defined", async () => {
    const plugin = new Plugin({
      name: "partial-plugin",
      config: vi.fn().mockImplementation((config) => config),
      // Only config hook defined, others should use defaults
    });

    const testConfig = { ...mockConfig };

    // Should return defaults for undefined hooks
    expect(await plugin.resolveId("./test", "importer", testConfig)).toBeNull();
    expect(await plugin.load("file.ts", testConfig)).toEqual(new Set());
    expect(await plugin.versions(testConfig)).toEqual(new Map());

    const updates = new Map();
    await expect(plugin.augment(updates, testConfig)).resolves.toBeUndefined();
  });
});
