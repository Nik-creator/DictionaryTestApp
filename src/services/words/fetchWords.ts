import { Word } from "@/store/words/types"
import { customFetch } from "../api"
import { urls } from "../constants"
import { SearchRequest } from "../types"

const { search } = urls

const fetchWords = async (props: SearchRequest) => {
  try {
    const wordsResponse = await customFetch<Word[]>(search(props))
    return wordsResponse
  } catch (error) {
    return Promise.reject(error)
  }
}

export { fetchWords }