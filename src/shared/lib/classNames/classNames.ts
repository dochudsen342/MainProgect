

type Mode = Record<string, boolean | string>



export function classNames(cls: string, mods: Mode = {}, additional: string[] = []): string {

  const modeCls = Object.entries(mods).map(([cls, boolean]) => {
    if (boolean) return cls
  })

  return [
    cls,
    ...additional.filter(Boolean),
    ...modeCls
  ]
    .join(' ')
}
