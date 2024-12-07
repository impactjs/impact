// import {
//   parseJsonConfigFileContent,
//   sys,
//   readConfigFile,
//   type CompilerOptions,
// } from "typescript";
// import { dirname, relative } from "node:path";

// function resolveTsConfig(
//   tsConfigPath: string,
//   base: string = process.cwd(),
// ): CompilerOptions {
//   const path = relative(base, tsConfigPath);
//   console.log("loading tsconfig", path);
//   // Read the config file
//   const configFile = readConfigFile(path, sys.readFile);

//   if (configFile.error) {
//     throw new Error(`Failed to read tsconfig: ${configFile.error.messageText}`);
//   }

//   const basePath = dirname(path);

//   // Parse the configuration
//   const parsedConfig = parseJsonConfigFileContent(
//     configFile.config,
//     sys,
//     basePath,
//   );

//   // If "extends" is present, we need to resolve the base config and merge
//   if (configFile.config.extends) {
//     const extendsPath = Bun.resolveSync(configFile.config.extends, base);
//     const baseConfigOptions = resolveTsConfig(extendsPath);

//     // Merge the options from the extended config with the current one
//     return { ...baseConfigOptions, ...parsedConfig.options };
//   }

//   return parsedConfig.options;
// }
