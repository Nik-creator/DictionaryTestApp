import { createAsyncThunk } from "@reduxjs/toolkit";
import { SlicesName, ThunkAsyncConfig } from "../types";
import type { WordsActionResponse, WordsActionRequest } from "./types";
import { wordsResponseFormatter } from "@/formatters/wordsResponseFormatter";

const fetchWordsAction = createAsyncThunk<
  WordsActionResponse,
  WordsActionRequest,
  ThunkAsyncConfig
>(
  `${SlicesName.WORDS}/fetchWordsAction`,
  async (variables, { extra: { wordsServices: {
    fetchWords
  } } }) => {
    try {
      const response = await fetchWords(variables)
      return wordsResponseFormatter(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export { fetchWordsAction }