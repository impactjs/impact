export class History {
  private history = new Map<string, Set<string>>();

  has(path: string) {
    return this.history.has(path);
  }

  register(path: string, imports: string[] = []) {
    const set = this.history.get(path) ?? new Set();
    for (const imp of imports) {
      set.add(imp);
    }
    this.history.set(path, set);
    return set;
  }

  add(path: string, imports: string[]) {
    const set = this.history.get(path) ?? new Set();
    for (const imp of imports) {
      set.add(imp);
    }
    this.history.set(path, set);
  }

  flat(path: string) {
    const set = this.history.get(path) ?? new Set();
    for (const imp of set) {
      const subs = this.history.get(imp);
      for (const sub of subs ?? []) {
        set.add(sub);
      }
    }
    return set;
  }
}
