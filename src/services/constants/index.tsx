import { getQueryString } from "@/helpers/getQueryString"
import { MeaningsRequest, SearchRequest } from "../types"

const baseUrl = `${process.env.API_KEY}/api/public/v1`

const urls = {
  search: (variables: SearchRequest) => `words/search${getQueryString(variables)}`,
  meanings: (variables: MeaningsRequest) => `meanings${getQueryString(variables)}`
}

export { baseUrl, urls }