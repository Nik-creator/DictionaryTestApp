import { localStorageService } from '@/services/LocalStorage'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { syncFavorites } from '@/store/words/slice'
import React, { useEffect } from 'react'

const useInitFavorites = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(syncFavorites())
  }, [])
}

export { useInitFavorites }