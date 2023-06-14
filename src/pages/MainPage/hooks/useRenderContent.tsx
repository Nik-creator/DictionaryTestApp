import { SearchGroup, SearchGroupSkeleton } from '@/components/SearchGroup'
import { useGetSkeletons } from '@/hooks/useGetSkeletons'
import { useGroupIds, useWordsStatus } from '@/store/words/selectors'
import React, { useMemo } from 'react'
import { NotFoundGroup } from '../components/NotFoundGroup'
import { DataLoadingStates } from '@/types'
import { useGetDefaultWords } from './useGetDefaultWords'

const DEFAULT_SKELETON_COUNT = 5

const useRenderContent = () => {
  const groupIds = useGroupIds()

  const wordsStatus = useWordsStatus()

  const groupLength = groupIds.length;

  const renderSkeleton = useGetSkeletons({
    skeletonComponent: SearchGroupSkeleton,
    length: DEFAULT_SKELETON_COUNT
  })

  useGetDefaultWords()

  const renderGroup = useMemo(() => {
    return groupLength
      ? groupIds.map((id) => (
        <SearchGroup key={id} id={id} />
      ))
      : <NotFoundGroup />
  }, [groupLength])

  const renderContent = useMemo(() => {
    if (wordsStatus === DataLoadingStates.LOADING) {
      return renderSkeleton()
    }
    return renderGroup
  }, [groupLength, wordsStatus])


  return renderContent
}

export { useRenderContent }