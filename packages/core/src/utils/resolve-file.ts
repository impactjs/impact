export function resolve(specifier: string, basedir: string) {
  try {
    return Bun.resolveSync(specifier, basedir);
  } catch {
    return null;
  }
}
