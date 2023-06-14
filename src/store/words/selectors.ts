import { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks/useAppSelector';
import { groupSelector } from './slice'

const groupIdsSelector = groupSelector.selectIds
const groupByIdSelector = groupSelector.selectById

const useGroupIds = () =>
  useAppSelector((state) => groupIdsSelector(state));

const useGroupEntityById = (id: EntityId) =>
  useAppSelector((state) => groupByIdSelector(state, id))

const useGetMeaningById = (groupId: string) =>
  useAppSelector((state) => state.words.meaningsDict[groupId] || {})

const useWordsStatus = () =>
  useAppSelector((state) => state.words.status)

export { useGroupIds, useGroupEntityById, useGetMeaningById, useWordsStatus }