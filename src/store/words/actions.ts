import { createAsyncThunk } from "@reduxjs/toolkit";
import { SlicesName, ThunkAsyncConfig } from "../types";
import type { WordsActionResponse, WordsActionRequest, MeaningsActionRequest, MeaningsActionResponse } from "./types";
import { wordsResponseFormatter } from "@/formatters/wordsResponseFormatter";

const fetchWordsAction = createAsyncThunk<
  WordsActionResponse,
  WordsActionRequest,
  ThunkAsyncConfig
>(
  `${SlicesName.WORDS}/fetchWordsAction`,
  async (variables, { getState, extra: { wordsServices: {
    fetchWords
  } } }) => {
    const {
      words: {
        favorites
      }
    } = getState()
    try {
      const response = await fetchWords(variables)
      return wordsResponseFormatter(response, favorites)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

const fetchMeaningsAction = createAsyncThunk<
  MeaningsActionResponse,
  void,
  ThunkAsyncConfig
>(
  `${SlicesName.WORDS}/fetchMeaningsAction`,
  async (_, {
    getState,
    extra: {
      wordsServices: {
        fetchMeanings
      }
    }
  }) => {
    const { words: {
      favorites
    } } = getState()
    try {
      const response = await fetchMeanings({ ids: favorites })
      return response.map((item) => ({ ...item, isFavorite: true }))
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export { fetchWordsAction, fetchMeaningsAction }