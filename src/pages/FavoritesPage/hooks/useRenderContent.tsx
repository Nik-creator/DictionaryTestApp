import { MeaningItem } from '@/components/MeaningItem'
import { NotFoundText } from '@/components/NotFoundText/ui/NotFoundText'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { fetchMeaningsAction } from '@/store/words/actions'
import { useFavoritesIds, useFilteredFavorites, useMeaningsStatus } from '@/store/words/selectors'
import { DataLoadingStates } from '@/types'
import { useGetSkeletons } from '@/hooks/useGetSkeletons'
import React, { useEffect } from 'react'
import { MeaningItemSkeleton } from '@/components/MeaningItem'
import { resetFilters } from '@/store/words/slice'

const DEFAULT_SKELETON_COUNT = 10

const useRenderContent = () => {
  const dispatch = useAppDispatch()

  const favoritesIds = useFavoritesIds()

  const filteredFavoritesIds = useFilteredFavorites()

  const loadingStatus = useMeaningsStatus()

  useEffect(() => {
    dispatch(fetchMeaningsAction())
    return () => {
      dispatch(resetFilters())
    }
  }, [favoritesIds.length])

  const renderSkeleton = useGetSkeletons({
    skeletonComponent: MeaningItemSkeleton,
    length: DEFAULT_SKELETON_COUNT
  })

  const renderItem = () => {
    return filteredFavoritesIds.length
      ? filteredFavoritesIds.map((id, index) => (
        <MeaningItem key={id} id={id as string} index={index} />
      ))
      : <NotFoundText text='Список избранного пуст' />
  }

  const renderContent = () => {
    if (loadingStatus === DataLoadingStates.LOADING) {
      return renderSkeleton()
    }
    return renderItem()
  }

  return renderContent
}

export { useRenderContent }