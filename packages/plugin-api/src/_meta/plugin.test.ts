import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResultUpdate } from "@impacts/types/results";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createPlugin, Plugin } from "../plugin.js";
import type { VcsUpdate } from "../types.js";

describe("Plugin", () => {
  let mockConfig: ImpactConfig;

  beforeEach(() => {
    vi.clearAllMocks();
    mockConfig = {
      entries: [{ id: "entry1", path: "src", description: "Source code" }],
      plugins: [],
    };
  });

  it("should create plugin with name only", () => {
    const plugin = new Plugin({ name: "test-plugin" });

    expect(plugin.name).toBe("test-plugin");
  });

  it("should create plugin with all hooks", () => {
    const configHook = vi.fn();
    const resolveIdHook = vi.fn();
    const loadHook = vi.fn();
    const logHook = vi.fn();
    const augmentHook = vi.fn();

    const plugin = new Plugin({
      name: "full-plugin",
      log: logHook,
      load: loadHook,
      config: configHook,
      augment: augmentHook,
      resolveId: resolveIdHook,
    });

    expect(plugin.name).toBe("full-plugin");
  });

  it("should create plugin with partial hooks", () => {
    const configHook = vi.fn();
    const logHook = vi.fn();

    const plugin = new Plugin({
      name: "partial-plugin",
      config: configHook,
      log: logHook,
    });

    expect(plugin.name).toBe("partial-plugin");
  });

  it("should validate plugin config during construction", () => {
    // This should work as validatePluginConfig is called in constructor
    expect(() => new Plugin({ name: "valid-plugin" })).not.toThrow();
  });

  it("should return original config when no config hook provided", async () => {
    const plugin = new Plugin({ name: "no-config-plugin" });

    const result = await plugin.config(mockConfig);

    expect(result).toBe(mockConfig);
  });

  it("should call config hook when provided", async () => {
    const configHook = vi.fn().mockImplementation((config) => ({
      ...config,
      customProperty: "modified",
    }));

    const plugin = new Plugin({
      name: "config-plugin",
      config: configHook,
    });

    const result = await plugin.config(mockConfig);

    expect(configHook).toHaveBeenCalledWith(mockConfig);
    expect(result).toHaveProperty("customProperty", "modified");
  });

  it("should handle async config hook", async () => {
    const configHook = vi.fn().mockResolvedValue({
      ...mockConfig,
      asyncProperty: "async-modified",
    });

    const plugin = new Plugin({
      name: "async-config-plugin",
      config: configHook,
    });

    const result = await plugin.config(mockConfig);

    expect(configHook).toHaveBeenCalledWith(mockConfig);
    expect(result).toHaveProperty("asyncProperty", "async-modified");
  });

  it("should return null when no resolveId hook provided", async () => {
    const plugin = new Plugin({ name: "no-resolve-plugin" });

    const result = await plugin.resolveId(
      "./module",
      "importer.ts",
      mockConfig,
    );

    expect(result).toBeNull();
  });

  it("should call resolveId hook when provided", async () => {
    const resolveIdHook = vi.fn().mockResolvedValue("resolved-path");

    const plugin = new Plugin({
      name: "resolve-plugin",
      resolveId: resolveIdHook,
    });

    const result = await plugin.resolveId(
      "./module",
      "importer.ts",
      mockConfig,
    );

    expect(resolveIdHook).toHaveBeenCalledWith(
      "./module",
      "importer.ts",
      mockConfig,
    );
    expect(result).toBe("resolved-path");
  });

  it("should handle resolveId hook returning null", async () => {
    const resolveIdHook = vi.fn().mockResolvedValue(null);

    const plugin = new Plugin({
      name: "resolve-null-plugin",
      resolveId: resolveIdHook,
    });

    const result = await plugin.resolveId(
      "./module",
      "importer.ts",
      mockConfig,
    );

    expect(result).toBeNull();
  });

  it("should return empty set when no load hook provided", async () => {
    const plugin = new Plugin({ name: "no-load-plugin" });

    const result = await plugin.load("file.ts", mockConfig);

    expect(result).toEqual(new Set());
  });

  it("should call load hook when provided", async () => {
    const loadHook = vi.fn().mockResolvedValue(new Set(["dep1.ts", "dep2.ts"]));

    const plugin = new Plugin({
      name: "load-plugin",
      load: loadHook,
    });

    const result = await plugin.load("file.ts", mockConfig);

    expect(loadHook).toHaveBeenCalledWith("file.ts", mockConfig);
    expect(result).toEqual(new Set(["dep1.ts", "dep2.ts"]));
  });

  it("should handle load hook returning empty set", async () => {
    const loadHook = vi.fn().mockResolvedValue(new Set());

    const plugin = new Plugin({
      name: "load-empty-plugin",
      load: loadHook,
    });

    const result = await plugin.load("file.ts", mockConfig);

    expect(result).toEqual(new Set());
  });

  it("should return empty array when no log hook provided", async () => {
    const plugin = new Plugin({ name: "no-log-plugin" });

    const result = await plugin.log("file.ts", mockConfig);

    expect(result).toEqual([]);
  });

  it("should call log hook when provided", async () => {
    const vcsUpdate: VcsUpdate = {
      id: "update1",
      title: "Update 1",
      description: "Description",
      date: "2023-12-01",
      author: "Author",
      timestamp: Date.now(),
      files: [
        {
          path: "file.ts",
          status: "modified",
        },
      ],
    };

    const logHook = vi.fn().mockResolvedValue([vcsUpdate]);

    const plugin = new Plugin({
      name: "log-plugin",
      log: logHook,
    });

    const result = await plugin.log("file.ts", mockConfig);

    expect(logHook).toHaveBeenCalledWith("file.ts", mockConfig);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(vcsUpdate);
  });

  it("should handle log hook returning empty array", async () => {
    const logHook = vi.fn().mockResolvedValue([]);

    const plugin = new Plugin({
      name: "log-empty-plugin",
      log: logHook,
    });

    const result = await plugin.log("file.ts", mockConfig);

    expect(result).toEqual([]);
  });

  it("should return undefined when no augment hook provided", async () => {
    const plugin = new Plugin({ name: "no-augment-plugin" });
    const updates = new Map<string, ImpactResultUpdate>();

    const result = await plugin.augment(updates, mockConfig);

    expect(result).toBeUndefined();
  });

  it("should call augment hook when provided", async () => {
    const augmentHook = vi.fn().mockResolvedValue(undefined);
    const updates = new Map<string, ImpactResultUpdate>();
    updates.set("file1", {
      id: "update1",
      title: "Update 1",
      references: [],
      author: "Author",
      meta: ["Description"],
      timestamp: Date.now(),
    });

    const plugin = new Plugin({
      name: "augment-plugin",
      augment: augmentHook,
    });

    const result = await plugin.augment(updates, mockConfig);

    expect(augmentHook).toHaveBeenCalledWith(updates, mockConfig);
    expect(result).toBeUndefined();
  });

  it("should handle augment hook modifying updates map", async () => {
    const augmentHook = vi.fn().mockImplementation((updates) => {
      updates.set("new-file", {
        id: "new-update",
        title: "New Update",
        references: [],
        author: "Author",
        meta: [],
        timestamp: Date.now(),
      });
    });

    const updates = new Map<string, ImpactResultUpdate>();

    const plugin = new Plugin({
      name: "augment-modify-plugin",
      augment: augmentHook,
    });

    await plugin.augment(updates, mockConfig);

    expect(updates.has("new-file")).toBe(true);
  });

  it("should handle all hook types together", async () => {
    const configHook = vi.fn().mockImplementation((config) => ({
      ...config,
      modified: true,
    }));
    const resolveIdHook = vi.fn().mockResolvedValue("resolved");
    const loadHook = vi.fn().mockResolvedValue(new Set(["dep.ts"]));
    const logHook = vi.fn().mockResolvedValue([]);
    const augmentHook = vi.fn().mockResolvedValue(undefined);

    const plugin = new Plugin({
      name: "all-hooks-plugin",
      config: configHook,
      resolveId: resolveIdHook,
      load: loadHook,
      log: logHook,
      augment: augmentHook,
    });

    // Test config
    const configResult = await plugin.config(mockConfig);
    expect(configHook).toHaveBeenCalledWith(mockConfig);
    expect(configResult).toHaveProperty("modified", true);

    // Test resolveId
    const resolveResult = await plugin.resolveId(
      "./test",
      "importer",
      mockConfig,
    );
    expect(resolveIdHook).toHaveBeenCalledWith(
      "./test",
      "importer",
      mockConfig,
    );
    expect(resolveResult).toBe("resolved");

    // Test load
    const loadResult = await plugin.load("file.ts", mockConfig);
    expect(loadHook).toHaveBeenCalledWith("file.ts", mockConfig);
    expect(loadResult).toEqual(new Set(["dep.ts"]));

    // Test log
    const logResult = await plugin.log("file.ts", mockConfig);
    expect(logHook).toHaveBeenCalledWith("file.ts", mockConfig);
    expect(logResult).toEqual([]);

    // Test augment
    const updates = new Map();
    const augmentResult = await plugin.augment(updates, mockConfig);
    expect(augmentHook).toHaveBeenCalledWith(updates, mockConfig);
    expect(augmentResult).toBeUndefined();
  });

  it("should handle hook errors gracefully", async () => {
    const errorHook = vi.fn().mockRejectedValue(new Error("Hook failed"));

    const plugin = new Plugin({
      name: "error-plugin",
      config: errorHook,
    });

    await expect(plugin.config(mockConfig)).rejects.toThrow("Hook failed");
  });

  it("should work with createPlugin helper function", () => {
    const configHook = vi.fn();

    const plugin = createPlugin({
      name: "helper-created-plugin",
      config: configHook,
    });

    expect(plugin).toBeInstanceOf(Plugin);
    expect(plugin.name).toBe("helper-created-plugin");
  });

  it("should preserve hook functions in private config", async () => {
    const configHook = vi.fn().mockImplementation((config) => config);

    const plugin = new Plugin({
      name: "private-config-plugin",
      config: configHook,
    });

    // Call config multiple times to ensure hook is preserved
    await plugin.config(mockConfig);
    await plugin.config(mockConfig);

    expect(configHook).toHaveBeenCalledTimes(2);
  });

  it("should handle undefined hook return values correctly", async () => {
    const configHook = vi.fn().mockResolvedValue(undefined);
    const resolveIdHook = vi.fn().mockResolvedValue(undefined);
    const loadHook = vi.fn().mockResolvedValue(undefined);
    const logHook = vi.fn().mockResolvedValue(undefined);

    const plugin = new Plugin({
      name: "undefined-returns-plugin",
      config: configHook,
      resolveId: resolveIdHook,
      load: loadHook,
      log: logHook,
    });

    // Should fall back to defaults when hooks return undefined
    const configResult = await plugin.config(mockConfig);
    expect(configResult).toBe(mockConfig);

    const resolveResult = await plugin.resolveId(
      "./test",
      "importer",
      mockConfig,
    );
    expect(resolveResult).toBeNull();

    const loadResult = await plugin.load("file.ts", mockConfig);
    expect(loadResult).toEqual(new Set());

    const logResult = await plugin.log("file.ts", mockConfig);
    expect(logResult).toEqual([]);
  });
});
