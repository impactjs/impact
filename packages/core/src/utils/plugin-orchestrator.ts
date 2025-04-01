import { EventEmitter } from "node:stream";
import { createEcmascriptPlugin } from "@impacts/ecmascript";
import { createGitPlugin } from "@impacts/git";
import { createGithubPlugin } from "@impacts/github";
import { createLinearPlugin } from "@impacts/linear";
import { logger } from "@impacts/logger";
import type { ImpactConfig } from "@impacts/types/config";
import type {
	AugmentPlugin,
	ScanPlugin,
	VcsPlugin,
} from "@impacts/types/plugins";
import type { ImpactResultUpdate } from "@impacts/types/results";
import type { Runtime } from "@impacts/types/runtime";
export class PluginOrchestrator {
	private eventHistory = new Set<string>();
	private eventsManager: EventEmitter = new EventEmitter();
	private plugins = {
		explore: [] as ScanPlugin[],
		augment: [] as AugmentPlugin[],
	};

	private vcs!: VcsPlugin;

	constructor(
		private config: ImpactConfig,
		private runtime: Runtime,
	) {
		for (const plugin of config.plugins) {
			if (Array.isArray(plugin)) {
				const [name, options] = plugin;
				switch (name) {
					case "ecmascript":
						this.plugins.explore.push(createEcmascriptPlugin(options));
						break;
					case "linear":
						this.plugins.augment.push(createLinearPlugin(options));
						break;
					case "github":
						this.plugins.augment.push(createGithubPlugin(options));
						break;
					case "git":
						this.vcs = createGitPlugin(options);
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
				case "explore":
					this.plugins.explore.push(plugin);
					break;
				case "vcs":
					this.vcs = plugin;
					break;
				default:
					logger.warn(`unknown plugin: ${plugin}`);
					break;
			}
		}
		if (!this.vcs) {
			throw new Error("no vcs plugin found");
		}
	}

	public async explore(id: string, entry: string) {
		const plugin = this.plugins.explore.find((plugin) =>
			plugin.shouldScan(entry, this.config),
		);
		if (!plugin) {
			throw new Error(`no explore plugin found for entry: ${entry}`);
		}
		return plugin.explore(id, entry, this.config, this.runtime);
	}

	private async awaitEvent(event: string) {
		if (this.eventHistory.has(event)) {
			return;
		}
		return new Promise<void>((resolve) => {
			this.eventsManager.once(event, () => {
				this.eventHistory.add(event);
				resolve();
			});
		});
	}

	async augment(updates: Map<string, ImpactResultUpdate>) {
		logger.debug("apllying transform plugins");
		await Promise.all(
			this.plugins.augment.map(async (plugin) => {
				await Promise.all(
					(plugin.awaits ?? [])
						.filter((dependency) =>
							this.plugins.augment.some((plugin) => plugin.name === dependency),
						)
						.map((dependency) => {
							logger.debug(
								`waiting for plugin: ${dependency} to finish before running ${plugin.name}`,
							);
							return this.awaitEvent(`plugin:transformed:${dependency}`);
						}),
				);
				logger.debug(`applying transform plugin: ${plugin.name}`);
				await plugin.augment(updates, this.config);
				logger.debug(`plugin: ${plugin.name} finished`);
				this.eventsManager.emit(`plugin:transformed:${plugin.name}`);
			}),
		);
	}

	public async listFiles() {
		if (!this.vcs) {
			throw new Error("no vcs plugin found");
		}
		return this.vcs.files(this.config, this.runtime);
	}

	public async listUpdates(files: Iterable<string>) {
		if (!this.vcs) {
			throw new Error("no vcs plugin found");
		}
		return this.vcs.updates(new Set(files), this.runtime);
	}
}
