import { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks/useAppSelector';
import { groupSelector, meaningSelector } from './slice'

const groupIdsSelector = groupSelector.selectIds
const groupByIdSelector = groupSelector.selectById

const meaningsIdsSelector = meaningSelector.selectIds
const meaningByIdSelector = meaningSelector.selectById

const useGroupIds = () =>
  useAppSelector((state) => groupIdsSelector(state));

const useGroupEntityById = (id: EntityId) =>
  useAppSelector((state) => groupByIdSelector(state, id))

const useGetMeaningById = (groupId: string) =>
  useAppSelector((state) => state.words.meaningsDict[groupId] || {})

const useWordsStatus = () =>
  useAppSelector((state) => state.words.groupLoadingStatus)

const useMeaningsStatus = () =>
  useAppSelector((state) => state.words.meaningsFavoritesLoadingStatus)

const useMeaningsIds = () =>
  useAppSelector((state) => meaningsIdsSelector(state))

const useFavoritesIds = () =>
  useAppSelector((state) => state.words.favorites)

const useMeaningById = (id: EntityId) =>
  useAppSelector((state) => meaningByIdSelector(state, id))

export {
  useGroupIds,
  useGroupEntityById,
  useGetMeaningById,
  useFavoritesIds,
  useMeaningsIds,
  useWordsStatus,
  useMeaningById,
  useMeaningsStatus
}