import { Meanings } from "@/store/words/types";
import { customFetch } from "../api";
import { urls } from "../constants";
import type { MeaningsRequest } from "../types";

const { meanings } = urls

const fetchMeaningsByIds = async (props: MeaningsRequest) => {
  try {
    const response = await customFetch<Meanings[]>(meanings(props))
    return response
  } catch (error) {
    return Promise.reject(error)
  }
}

export { fetchMeaningsByIds }