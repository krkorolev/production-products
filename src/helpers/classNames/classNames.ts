type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additionary: string[]) {
  return [
    cls,
    ...additionary,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
