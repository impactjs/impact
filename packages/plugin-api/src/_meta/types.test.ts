import { describe, expect, it, vi } from "vitest";
import { createPlugin } from "../plugin.js";
import type { VcsUpdate } from "../types.js";
import { PluginPhase, pluginSchema, vcsUpdateSchema } from "../types.js";

describe("Plugin Types", () => {
  describe("PluginPhase", () => {
    it("should contain all expected phases", () => {
      expect(PluginPhase.CONFIG).toBe("config");
      expect(PluginPhase.RESOLVE).toBe("resolve");
      expect(PluginPhase.LOAD).toBe("load");
      expect(PluginPhase.LOG).toBe("log");
      expect(PluginPhase.AUGMENT).toBe("augment");
    });
  });

  describe("vcsUpdateSchema", () => {
    it("should validate a valid VCS update", () => {
      const validUpdate: VcsUpdate = {
        id: "commit-123",
        title: "Fix bug in authentication",
        description: "Added proper error handling",
        date: "2023-12-01T10:30:00Z",
        author: "John Doe",
        timestamp: 1701422200000,
        files: [
          {
            path: "src/auth.ts",
            status: "modified",
          },
        ],
      };

      const result = vcsUpdateSchema.safeParse(validUpdate);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validUpdate);
      }
    });

    it("should reject invalid VCS update", () => {
      const invalidUpdate = {
        id: "commit-123",
        title: "Fix bug",
        // Missing required fields
        files: [
          {
            path: "src/auth.ts",
            status: "invalid-status", // Invalid status
          },
        ],
      };

      const result = vcsUpdateSchema.safeParse(invalidUpdate);
      expect(result.success).toBe(false);
    });
  });

  describe("pluginSchema", () => {
    it("should validate a minimal plugin", () => {
      const minimalPlugin = createPlugin({
        name: "test-plugin",
      });

      const result = pluginSchema.safeParse(minimalPlugin);
      expect(result.success).toBe(true);
    });

    it("should validate a plugin with all hooks", () => {
      const fullPlugin = createPlugin({
        name: "full-plugin",
        config: vi.fn(),
        resolveId: vi.fn(),
        load: vi.fn(),
        log: vi.fn(),
        augment: vi.fn(),
      });

      const result = pluginSchema.safeParse(fullPlugin);
      expect(result.success).toBe(true);
    });

    it("should reject plugin without name", () => {
      const invalidPlugin = {
        config: vi.fn(),
      };

      const result = pluginSchema.safeParse(invalidPlugin);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Required");
      }
    });

    it("should reject plugin with empty name", () => {
      const invalidPlugin = {
        name: "",
      };

      const result = pluginSchema.safeParse(invalidPlugin);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "Plugin name is required",
        );
      }
    });

    it("should enforce resolveId/load coupling - resolveId without load", () => {
      const invalidPlugin = {
        name: "invalid-plugin",
        resolveId: vi.fn(),
        // Missing load function
      };

      const result = pluginSchema.safeParse(invalidPlugin);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "both resolveId and load hooks together",
        );
      }
    });

    it("should enforce resolveId/load coupling - load without resolveId", () => {
      const invalidPlugin = {
        name: "invalid-plugin",
        load: vi.fn(),
        // Missing resolveId function
      };

      const result = pluginSchema.safeParse(invalidPlugin);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "both resolveId and load hooks together",
        );
      }
    });

    it("should allow resolveId and load together", () => {
      const validPlugin = {
        name: "valid-plugin",
        resolveId: vi.fn(),
        load: vi.fn(),
      };

      const result = pluginSchema.safeParse(validPlugin);
      expect(result.success).toBe(true);
    });

    it("should allow other hooks without resolveId/load", () => {
      const validPlugin = {
        name: "valid-plugin",
        config: vi.fn(),
        log: vi.fn(),
        augment: vi.fn(),
      };

      const result = pluginSchema.safeParse(validPlugin);
      expect(result.success).toBe(true);
    });
  });
});
