import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";
import type {
  Plugin,
  PluginContext,
  TransformPlugin,
} from "@impacts/types/plugins";
import { EventEmitter } from "node:stream";

export class PluginOrchestrator {
  private enventHistory = new Set<string>();
  private eventsManager: EventEmitter = new EventEmitter();
  private plugins: {
    transform: Array<TransformPlugin>;
  } = {
    transform: [],
  };

  constructor(private config: ImpactConfig) {
    for (const plugin of config.plugins) {
      if (plugin.transform) {
        plugin.awaits = plugin.awaits ?? [];
        logger.debug(`adding transform plugin: ${plugin.name}`);
        this.plugins.transform.push(plugin);
      } else {
        logger.debug(`plugin ${plugin.name} is not a transform plugin`);
      }
    }
  }

  private async awaitEvent(event: string) {
    if (this.enventHistory.has(event)) {
      return;
    }
    return new Promise<void>((resolve) => {
      this.eventsManager.once(event, () => {
        this.enventHistory.add(event);
        resolve();
      });
    });
  }

  getOutputPriority() {
    const outputPriority = [...(this.config.outputPriority ?? [])];
    const keys = [
      ...this.plugins.transform.map((plugin) => plugin.name),
      "git",
    ];
    for (const key of keys) {
      if (!outputPriority.includes(key)) {
        outputPriority.push(key);
      }
    }
    return outputPriority;
  }

  public async run() {
    const context: PluginContext = {
      commits: new Map(),
      plugins: {},
    };
    await this.transform(context);
    return context;
  }

  async transform(context: PluginContext) {
    logger.debug("apllying transform plugins");
    await Promise.all(
      this.plugins.transform.map(async (plugin) => {
        await Promise.all(
          (plugin.awaits ?? []).map((dependency) => {
            logger.debug(
              `waiting for plugin: ${dependency} to finish before running ${plugin.name}`,
            );
            this.awaitEvent(`plugin:transformed:${dependency}`);
          }),
        );
        logger.debug(`applying transform plugin: ${plugin.name}`);
        const result = await plugin.transform(context, this.config);
        context.plugins[plugin.name] = result;
        logger.debug(`plugin: ${plugin.name} finished`);
        this.eventsManager.emit(`plugin:transformed:${plugin.name}`, result);
      }),
    );
    return context;
  }
}
