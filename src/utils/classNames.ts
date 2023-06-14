
type Modes = { [key: string]: boolean | string }

const classNames = (cls: string, modes: Modes = {}, additional: (string | undefined)[] = []) => {
  const modesArr = Object.entries(modes || {}).reduce<string[]>((acc, [modeKey, modeValue]) => {
    if (modeValue) {
      return acc.concat(modeKey)
    }

    return acc
  }, [])

  return [
    cls,
    ...additional.filter(Boolean),
    ...modesArr
  ].join(' ')
}

export { classNames as cls }