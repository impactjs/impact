export function getVersion() {
  return process.env.IMPACTS_CLI_VERSION ?? "not set";
}
