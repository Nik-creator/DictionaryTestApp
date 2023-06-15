type SearchRequest = {
  search?: string
  page?: number
  pageSize?: number
}

type MeaningsRequest = {
  ids: string[]
}

export type { SearchRequest, MeaningsRequest }