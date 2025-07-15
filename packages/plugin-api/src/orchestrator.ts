import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResultUpdate } from "@impacts/types/results";
import type { Plugin } from "./plugin.js";
import type { PluginExecutionResult, VcsUpdate } from "./types.js";

export class PluginOrchestrator {
  private plugins: Plugin[] = [];
  private executionResults: PluginExecutionResult[] = [];

  constructor(public config: ImpactConfig) {}

  public async init(): Promise<void> {
    for (const plugin of this.config.plugins) {
      const pluginConfig = await plugin.config(this.config);
      this.config = pluginConfig;
    }
  }

  /**
   * Gets all execution results
   */
  getExecutionResults(): PluginExecutionResult[] {
    return [...this.executionResults];
  }

  public async resolveId(id: string, importer: string): Promise<string | null> {
    for (const plugin of this.plugins) {
      const result = await plugin.resolveId(id, importer, this.config);
      if (result) return result;
    }
    return null;
  }

  public async load(file: string): Promise<Set<string>> {
    const resolved: string[] = [];
    for (const plugin of this.plugins) {
      const result = await plugin.load(file, this.config);
      resolved.push(...result);
    }
    return new Set(resolved);
  }

  public async log(file: string): Promise<Map<string, VcsUpdate>> {
    const updates: Map<string, VcsUpdate> = new Map();
    for (const plugin of this.plugins) {
      const result = await plugin.log(file, this.config);
      for (const [id, update] of result.entries()) {
        if (updates.has(id)) {
          continue;
        }
        updates.set(id, update);
      }
    }
    return updates;
  }

  public async augment(
    updates: Map<string, ImpactResultUpdate>,
  ): Promise<void> {
    for (const plugin of this.plugins) {
      await plugin.augment(updates, this.config);
    }
  }

  public async versions(): Promise<Map<string, VcsUpdate>> {
    return new Map(
      (
        await Promise.all(
          this.plugins.map(async (plugin) =>
            (await plugin.versions(this.config)).entries(),
          ),
        )
      ).reduce<[string, VcsUpdate][]>(
        (acc, curr) => acc.concat(Array.from(curr)),
        [],
      ),
    );
  }
}
