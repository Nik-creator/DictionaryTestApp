import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState, SlicesName } from "../types";
import { fetchMeaningsAction, fetchWordsAction } from "./actions";
import type {
  GroupResponse,
  Meanings,
  PayloadChangeFavoritesPosition,
  PayloadChangeMeaningsPosition,
  PayloadFavorite,
  WordsState
} from "./types";
import { DataLoadingStates } from "@/types";
import { changePosition } from "../utils/changePosition";
import { localStorageService } from "@/services/LocalStorage";

const groupAdapter = createEntityAdapter<GroupResponse>()
const meaningsAdapter = createEntityAdapter<Meanings>()

const groupSelector = groupAdapter.getSelectors<RootState>(
  (state) => state.words.group,
);

const meaningSelector = meaningsAdapter.getSelectors<RootState>(
  (state) => state.words.meanings
)

const initialState: WordsState = {
  group: groupAdapter.getInitialState(),
  meanings: meaningsAdapter.getInitialState(),
  groupLoadingStatus: DataLoadingStates.IDLE,
  meaningsFavoritesLoadingStatus: DataLoadingStates.IDLE,
  meaningsDict: {},
  favorites: []
}

const slice = createSlice({
  name: SlicesName.WORDS,
  initialState,
  reducers: {
    syncFavorites(state) {
      const favoritesIds = localStorageService.getFavoritesIds()
      state.favorites = favoritesIds
    },
    addFavorite(state, { payload: id }: PayloadFavorite) {
      state.favorites.push(id);

      state.meaningsDict = {
        ...state.meaningsDict,
        [id]: {
          ...state.meaningsDict[id],
          isFavorite: true
        }
      }
    },
    deleteFavorite(state, { payload: id }: PayloadFavorite) {
      const newFavoritesIds = state.favorites.filter(
        (favoriteId) => Number(favoriteId) !== Number(id),
      );
      state.favorites = newFavoritesIds;

      state.meaningsDict = {
        ...state.meaningsDict,
        [id]: {
          ...state.meaningsDict[id],
          isFavorite: false
        }
      }
    },
    resetWords(state) {
      groupAdapter.removeAll(state.group),
        state.meaningsDict = initialState.meaningsDict
    },
    changeFavoritesPosition(state, { payload }: PayloadChangeFavoritesPosition) {

      const { dragIndex, hoverIndex } = payload

      const draftPosition = changePosition({
        dragIndex,
        hoverIndex,
        state: state.favorites
      })

      state.favorites = draftPosition
      state.meanings.ids = draftPosition
    },
    changeMeaningsPosition(state, { payload }: PayloadChangeMeaningsPosition) {
      const {
        dragIndex,
        groupId,
        hoverIndex
      } = payload

      const groupItem = state.group.entities[groupId]

      if (groupItem) {

        const { meaningsIds } = groupItem.entity

        const draftMeaningsIds = changePosition({
          state: meaningsIds,
          dragIndex,
          hoverIndex
        })

        const changes: Partial<GroupResponse> = {
          entity: {
            meaningsIds: draftMeaningsIds,
            text: groupItem.entity.text
          }
        };

        groupAdapter.updateOne(state.group, {
          id: groupId,
          changes
        })
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWordsAction.fulfilled, (state, { payload }) => {
      const { group, meaningsDict } = payload
      groupAdapter.addMany(state.group, group)
      state.meaningsDict = meaningsDict
      state.groupLoadingStatus = DataLoadingStates.IDLE
    }),
      builder.addCase(fetchWordsAction.rejected, (state) => {
        state.groupLoadingStatus = DataLoadingStates.ERROR
      })
    builder.addCase(fetchWordsAction.pending, (state) => {
      state.groupLoadingStatus = DataLoadingStates.LOADING
    }),
      builder.addCase(fetchMeaningsAction.pending, (state) => {
        state.meaningsFavoritesLoadingStatus = DataLoadingStates.LOADING
      }),
      builder.addCase(fetchMeaningsAction.fulfilled, (state, { payload }) => {
        meaningsAdapter.setAll(state.meanings, payload)
        state.meaningsFavoritesLoadingStatus = DataLoadingStates.IDLE
      }),
      builder.addCase(fetchMeaningsAction.rejected, (state) => {
        state.meaningsFavoritesLoadingStatus = DataLoadingStates.ERROR
      })
  }
})

export { groupSelector, meaningSelector }

export const {
  reducer: wordsReducer,
  actions: {
    resetWords,
    changeMeaningsPosition,
    changeFavoritesPosition,
    addFavorite,
    syncFavorites,
    deleteFavorite
  }
} = slice;
