import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState, SlicesName } from "../types";
import { fetchWordsAction } from "./actions";
import type { GroupResponse, PayloadChangeMeaningsPosition, WordsState } from "./types";
import { DataLoadingStates } from "@/types";
import { changePosition } from "../utils/changePosition";

const groupAdapter = createEntityAdapter<GroupResponse>()

const groupSelector = groupAdapter.getSelectors<RootState>(
  (state) => state.words.group,
);

const initialState: WordsState = {
  group: groupAdapter.getInitialState(),
  status: DataLoadingStates.IDLE,
  meaningsDict: {}
}

const slice = createSlice({
  name: SlicesName.WORDS,
  initialState,
  reducers: {
    resetWords(state) {
      state.group = groupAdapter.getInitialState(),
        state.meaningsDict = initialState.meaningsDict
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
      state.status = DataLoadingStates.IDLE
    }),
      builder.addCase(fetchWordsAction.rejected, (state, { error }) => {
        state.status = DataLoadingStates.ERROR
      })
    builder.addCase(fetchWordsAction.pending, (state) => {
      state.status = DataLoadingStates.LOADING
    })
  }
})

export { groupSelector }

export const {
  reducer: wordsReducer,
  actions: {
    resetWords,
    changeMeaningsPosition
  }
} = slice;
