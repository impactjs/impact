import type { PluginOrchestrator } from "@impacts/plugin-api";

export async function traverse(
  entry: string,
  orcherstrator: PluginOrchestrator,
  set: Set<string> = new Set(),
) {
  const load = await orcherstrator.load(entry);
  for (const file of load) {
    const resolved = await orcherstrator.resolveId(file, entry);
    if (resolved === null) {
      continue;
    }
    if (set.has(resolved)) {
      continue;
    }
    set.add(resolved);
    await traverse(resolved, orcherstrator, set);
  }
  return set;
}
