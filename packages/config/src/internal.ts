import { type ImpactConfig, impactConfigSchema } from "@impacts/types/config";
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
  const validate = impactConfigSchema.safeParse(result.config);
  if (!validate.success) {
    throw new Error(validate.error.errors.join("\n"));
  }
  return validate.data;
}
