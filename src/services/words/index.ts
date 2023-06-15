import { MeaningsRequest, SearchRequest } from "../types";
import { fetchMeaningsByIds } from "./fetchMeaningsByIds";
import { fetchWords } from "./fetchWords";

class WordsService {
  fetchWords = (props: SearchRequest) => fetchWords(props)
  fetchMeanings = (props: MeaningsRequest) => fetchMeaningsByIds(props)
}

const wordsServices = new WordsService()

export { wordsServices }