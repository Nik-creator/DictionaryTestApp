import { SearchRequest } from "../types";
import { fetchWords } from "./fetchWords";

class WordsService {
  fetchWords = (props: SearchRequest) => fetchWords(props)
}

const wordsServices = new WordsService()

export { wordsServices }