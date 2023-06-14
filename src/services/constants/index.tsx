import { getQueryString } from "@/helpers/getQueryString"
import { SearchRequest } from "../types"

const baseUrl = `${process.env.API_KEY}/api/public/v1`

const urls = {
  search: (variables: SearchRequest) => `words/search${getQueryString(variables)}`,
}

export { baseUrl, urls }