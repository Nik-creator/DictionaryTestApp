import { EntityId, createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks/useAppSelector';
import { groupSelector, meaningSelector } from './slice'
import { Meanings, PartOfSpeechCode } from './types';
import { RootState } from '../types';

const groupIdsSelector = groupSelector.selectIds
const groupByIdSelector = groupSelector.selectById

const meaningsIdsSelector = meaningSelector.selectIds
const meaningByIdSelector = meaningSelector.selectById
const meaningsDict = meaningSelector.selectEntities

const filterSelector = (state: RootState) => state.words.filters


const useGroupIds = () =>
  useAppSelector((state) => groupIdsSelector(state));

const useGroupEntityById = (id: EntityId) =>
  useAppSelector((state) => groupByIdSelector(state, id))

const useGetMeaningById = (groupId: string) =>
  useAppSelector((state) => state.words.meaningsDict[groupId] || {})

const isFavoriteMeaningById = (id: string) =>
  useAppSelector((state) => state.words.favorites.some((stateId) => Number(stateId) === Number(id)))

const useWordsStatus = () =>
  useAppSelector((state) => state.words.groupLoadingStatus)

const useMeaningsStatus = () =>
  useAppSelector((state) => state.words.meaningsFavoritesLoadingStatus)

const useMeaningsIds = () =>
  useAppSelector((state) => meaningsIdsSelector(state))

const useFavoritesIds = () =>
  useAppSelector((state) => state.words.favorites)

const useFilteredFavorites = () =>
  useAppSelector((state) => selectMeaningsByPartsSpeech(state))

const selectMeaningsByPartsSpeech =
  createSelector(
    [
      meaningsDict,
      filterSelector,
      meaningsIdsSelector
    ],
    (meaningEntity, filters, favoritesIds) => {
      const { partOfSpeechValues, searchString } = filters

      const hasActiveValues = Object.values(partOfSpeechValues).filter(Boolean).length
      const hasSearchString = Boolean(searchString)

      const hasFilters = (hasActiveValues || hasSearchString)

      const filtered = Object.values(meaningEntity).filter((item) => {
        if (!item) return item

        const { partOfSpeechCode, text } = item

        const filteredPartSpeech = partOfSpeechValues[partOfSpeechCode]
        const search = text.startsWith(searchString)

        return hasActiveValues
          ? Boolean(filteredPartSpeech && search)
          : search

      }).map((item) => item?.id)

      return hasFilters ? filtered : favoritesIds
    }
  )



const useMeaningById = (id: EntityId) =>
  useAppSelector((state) => meaningByIdSelector(state, id))

const selectPartsSpeech =
  createSelector(
    meaningsDict,
    (state) => Object.values(state).reduce<PartOfSpeechCode[]>((acc, item) => {
      if (item?.partOfSpeechCode && !acc.includes(item?.partOfSpeechCode)) {
        acc.push(item.partOfSpeechCode)
      }

      return acc
    }, [])
  )

const useFilteredPartOfSpeechCheckboxValues = () =>
  useAppSelector((state) => state.words.filters.partOfSpeechValues)

const usePartsSpeech = () =>
  useAppSelector((state) => selectPartsSpeech(state))

export {
  useGroupIds,
  useGroupEntityById,
  useGetMeaningById,
  useFavoritesIds,
  useMeaningsIds,
  usePartsSpeech,
  useFilteredFavorites,
  useFilteredPartOfSpeechCheckboxValues,
  isFavoriteMeaningById,
  useWordsStatus,
  useMeaningById,
  useMeaningsStatus
}