import type { ImpactConfig } from "@impacts/types/config";

type RequiredKeys = "entries";

export type PartialImpactConfig = Partial<Exclude<ImpactConfig, RequiredKeys>> &
  Required<Pick<ImpactConfig, RequiredKeys>>;

export function defineConfig(config: PartialImpactConfig): ImpactConfig {
  return {
    ...config,
    plugins: config.plugins ?? [],
  };
}
