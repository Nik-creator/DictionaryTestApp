import { baseUrl } from "./constants"

const customFetch = async <T,>(
  uri: string,
  options?: RequestInit
): Promise<T> => fetch(`${baseUrl}/${uri}`, options).then((res) => res.json())

export { customFetch }