import type { ImpactConfig } from "@impacts/types/config";
import type { ImpactResultUpdate } from "@impacts/types/results";
import type {
  AugmentHook,
  ConfigHook,
  LoadHook,
  ResolveIdHook,
  VcsUpdate,
  VersionControlHook,
} from "./types.js";
import { validatePluginConfig } from "./utils.js";

interface IPlugin {
  name: string;
  config: ConfigHook;
  resolveId: ResolveIdHook;
  load: LoadHook;
  augment: AugmentHook;
  versions: VersionControlHook;
}

type PluginOptions = {
  name: string;
} & Partial<IPlugin>;

export class Plugin implements IPlugin {
  name: string;

  private _config: PluginOptions;

  constructor(options: PluginOptions) {
    validatePluginConfig(options);
    this.name = options.name;
    this._config = options;
  }

  public async config(config: ImpactConfig): Promise<ImpactConfig> {
    return this._config.config?.(config) || config;
  }

  public async resolveId(
    id: string,
    importer: string,
    config: ImpactConfig,
  ): Promise<string | null> {
    return this._config.resolveId?.(id, importer, config) || null;
  }

  public async load(id: string, config: ImpactConfig): Promise<Set<string>> {
    return this._config.load?.(id, config) || new Set();
  }

  public async augment(
    updates: Map<string, ImpactResultUpdate>,
    config: ImpactConfig,
  ): Promise<void> {
    return this._config.augment?.(updates, config);
  }

  public async versions(config: ImpactConfig): Promise<Map<string, VcsUpdate>> {
    const result = this._config.versions?.(config) || new Map();
    console.log(result);
    return result;
  }
}

export function createPlugin(options: PluginOptions): Plugin {
  return new Plugin(options);
}
