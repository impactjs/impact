import { Plugin } from "@impacts/plugin-api/plugin";
import {
  type ImpactConfig,
  impactConfigSchema,
  rawConfigSchema,
} from "@impacts/types/config";
import { cosmiconfig } from "cosmiconfig";

const explorer = cosmiconfig("impact");

type LoadConfigOptions = {
  cwd: string;
  config?: string;
};

export async function loadConfig(
  options: LoadConfigOptions,
): Promise<ImpactConfig> {
  if (options.config) {
    const result = await explorer.load(options.config);
    if (!result) {
      throw new Error(`Config not found at path: ${options.config}`);
    }
    const validate = impactConfigSchema.safeParse(result.config);
    if (!validate.success) {
      throw new Error(validate.error.errors.join("\n"));
    }
    return validate.data;
  }
  const result = await explorer.search();
  if (!result) {
    throw new Error("Config not found");
  }
  const validate = rawConfigSchema.safeParse(result.config);
  if (!validate.success) {
    throw new Error(validate.error.errors.join("\n"));
  }
  const plugins: Plugin[] = await Promise.all(
    validate.data.plugins.map(async (plugin) => {
      if (plugin instanceof Plugin) {
        return plugin;
      }
      const [id, options] = plugin;
      const { _impact_auto_create } = await import(id);
      return _impact_auto_create(options);
    }),
  );
  return { ...validate.data, plugins };
}
