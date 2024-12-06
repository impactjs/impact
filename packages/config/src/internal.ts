import { type ImpactConfig, impactConfigSchema } from "@impacts/types/config";
import {
  parseJsonConfigFileContent,
  sys,
  readConfigFile,
  type CompilerOptions,
} from "typescript";
import { cosmiconfig } from "cosmiconfig";
import { dirname, join, relative } from "node:path";

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
  const conf =
    typeof result.config === "object"
      ? {
          ...result.config,
          tsconfig: resolveTsConfig(result.config.tsconfig),
          plugins: result.config.plugins ?? [],
        }
      : result.config;
  const validate = impactConfigSchema.safeParse(conf);
  if (!validate.success) {
    throw new Error(validate.error.errors.join("\n"));
  }
  return conf;
}

function resolveTsConfig(
  tsConfigPath: string,
  base: string = process.cwd(),
): CompilerOptions {
  const path = relative(base, tsConfigPath);
  console.log("loading tsconfig", path);
  // Read the config file
  const configFile = readConfigFile(path, sys.readFile);

  if (configFile.error) {
    throw new Error(`Failed to read tsconfig: ${configFile.error.messageText}`);
  }

  const basePath = dirname(path);

  // Parse the configuration
  const parsedConfig = parseJsonConfigFileContent(
    configFile.config,
    sys,
    basePath,
  );

  // If "extends" is present, we need to resolve the base config and merge
  if (configFile.config.extends) {
    const extendsPath = Bun.resolveSync(configFile.config.extends, base);
    const baseConfigOptions = resolveTsConfig(extendsPath);

    // Merge the options from the extended config with the current one
    return { ...baseConfigOptions, ...parsedConfig.options };
  }

  return parsedConfig.options;
}
