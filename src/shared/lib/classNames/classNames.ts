export type Mods = Record<string, boolean | string | undefined>

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  const modeCls = Object.entries(mods).map(([cls, boolean]) => {
    if (boolean) return cls
  })

  return [cls, ...additional.filter(Boolean), ...modeCls].join(' ')
}
