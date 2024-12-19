import { EventEmitter } from "node:stream";
import { createEcmascriptPlugin } from "@impacts/ecmascript";
import { createGithubPlugin } from "@impacts/github";
import { createLinearPlugin } from "@impacts/linear";
import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";
import type {
  AugmentPlugin,
  PluginContext,
  ScanPlugin,
} from "@impacts/types/plugins";

export class PluginOrchestrator {
  private enventHistory = new Set<string>();
  private eventsManager: EventEmitter = new EventEmitter();
  private plugins = {
    scan: new Array<ScanPlugin>(),
    augment: new Array<AugmentPlugin>(),
  };

  constructor(private config: ImpactConfig) {
    for (const plugin of config.plugins) {
      if (Array.isArray(plugin)) {
        const [name, options] = plugin;
        switch (name) {
          case "ecmascript":
            this.plugins.scan.push(createEcmascriptPlugin(options));
            break;
          case "linear":
            this.plugins.augment.push(createLinearPlugin(options));
            break;
          case "github":
            this.plugins.augment.push(createGithubPlugin(options));
            break;
          default:
            logger.warn(`unknown plugin: ${name}`);
            break;
        }
        continue;
      }
      switch (plugin.type) {
        case "augment":
          this.plugins.augment.push(plugin);
          break;
        case "scan":
          this.plugins.scan.push(plugin);
          break;
        default:
          logger.warn(`unknown plugin: ${plugin}`);
          break;
      }
    }
  }

  public async scan(entry: string) {
    const plugin = this.plugins.scan.find((plugin) =>
      plugin.shouldScan(entry, this.config),
    );
    if (!plugin) {
      throw new Error(`no scan plugin found for entry: ${entry}`);
    }
    return plugin.scan(entry, this.config);
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
    const keys = [...this.plugins.augment.map((plugin) => plugin.name), "git"];
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
      this.plugins.augment.map(async (plugin) => {
        await Promise.all(
          (plugin.awaits ?? []).map((dependency) => {
            logger.debug(
              `waiting for plugin: ${dependency} to finish before running ${plugin.name}`,
            );
            this.awaitEvent(`plugin:transformed:${dependency}`);
          }),
        );
        logger.debug(`applying transform plugin: ${plugin.name}`);
        const result = await plugin.augment(context, this.config);
        context.plugins[plugin.name] = result;
        logger.debug(`plugin: ${plugin.name} finished`);
        this.eventsManager.emit(`plugin:transformed:${plugin.name}`, result);
      }),
    );
    return context;
  }
}
