import type { PluginOrchestrator } from "@impacts/plugin-api";

export async function traverse(
  entry: string,
  orcherstrator: PluginOrchestrator,
  set: Set<string> = new Set(),
): Promise<Set<string>> {
  const load = await orcherstrator.load(entry);
  return new Set(
    (
      await Promise.all(
        Array.from(load).map(async (file): Promise<string[]> => {
          const resolved = await orcherstrator.resolveId(file, entry);
          if (resolved === null) {
            return [];
          }
          if (set.has(resolved)) {
            return [];
          }
          set.add(resolved);
          await traverse(resolved, orcherstrator, set);
          return [resolved];
        }),
      )
    ).flat(),
  ).union(set);
}
