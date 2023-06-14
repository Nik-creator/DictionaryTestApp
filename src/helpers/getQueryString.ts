import type { QueryStringDict } from "@/types";

const getQueryString = (queryDict: QueryStringDict) => {
  const params = Object.entries(queryDict).reduce<string[]>((acc, [key, value]) => {
    if (value && String(value).length) {
      acc.push(`${key}=${value}`)
    }
    return acc
  }, [])

  return `?${params.join('&')}`;
}

export { getQueryString }