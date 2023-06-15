import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { useGetMeaningById } from '@/store/words/selectors'
import { addFavorite, deleteFavorite } from '@/store/words/slice'
import React, { useCallback } from 'react'

const useFavorites = (id: string) => {
  const { isFavorite } = useGetMeaningById(id)

  const dispatch = useAppDispatch()

  const handleClick = useCallback(() => {
    if (!isFavorite) {
      dispatch(addFavorite(id))
      return
    }
    dispatch(deleteFavorite(id))
  }, [id, isFavorite])


  return {
    handleClick,
    isFavorite
  }
}

export { useFavorites }