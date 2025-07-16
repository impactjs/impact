import type { Plugin } from "@impacts/plugin-api/plugin";
import { rawConfigSchema } from "@impacts/types/internal";
import { cosmiconfig } from "cosmiconfig";
import type z from "zod";

const explorer = cosmiconfig("impact");

type LoadConfigOptions = {
  cwd: string;
  config?: string;
};

async function transformRawConfig(config: z.infer<typeof rawConfigSchema>) {
  const plugins: Plugin[] = await Promise.all(
    config.plugins.map(async (plugin) => {
      if (typeof plugin === "object" && plugin !== null) {
        return plugin;
      }
      const [id, options] = plugin as [string, unknown];
      const { _impact_auto_create } = await import(id);
      return _impact_auto_create(options);
    }),
  );
  return { ...config, plugins };
}

export async function loadConfig(options: LoadConfigOptions) {
  if (options.config) {
    const result = await explorer.load(options.config);
    if (!result) {
      throw new Error(`Config not found at path: ${options.config}`);
    }
    const validate = rawConfigSchema.safeParse(result.config);
    if (!validate.success) {
      throw new Error(validate.error.message);
    }
    return transformRawConfig(validate.data);
  }
  const result = await explorer.search();
  if (!result) {
    throw new Error("Config not found");
  }
  const validate = rawConfigSchema.safeParse(result.config);
  if (!validate.success) {
    throw new Error(validate.error.message);
  }
  return transformRawConfig(validate.data);
}
