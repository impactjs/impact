import type { ImpactResult } from "@impacts/types/results";
import yaml from "yaml";

type WriteOptions = {
  outfile?: string;
  format?: string;
};

export async function write(result: ImpactResult, options: WriteOptions = {}) {
  const output = render(result, options.format);

  if (!options.outfile) {
    console.log(output);
    return;
  }

  await Bun.write(options.outfile, output);
  console.log(`wrote to: ${options.outfile}`);
}

function render(result: ImpactResult, format: string | undefined) {
  switch (format ?? "yaml") {
    case "json":
      return JSON.stringify(result);
    case "yaml":
      return yaml.stringify(result);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
