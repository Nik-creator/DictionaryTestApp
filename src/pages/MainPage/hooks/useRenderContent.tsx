import { SearchGroup, SearchGroupSkeleton } from '@/components/SearchGroup'
import { useGetSkeletons } from '@/hooks/useGetSkeletons'
import { useGroupIds, useWordsStatus } from '@/store/words/selectors'
import React, { useMemo } from 'react'
import { DataLoadingStates } from '@/types'
import { useGetDefaultWords } from './useGetDefaultWords'
import { NotFoundText } from '@/components/NotFoundText/ui/NotFoundText'

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
      : <NotFoundText text='Слова не найдены' />
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