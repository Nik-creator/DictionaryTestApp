import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { fetchWordsAction } from '@/store/words/actions'
import React, { useEffect } from 'react'

const useGetDefaultWords = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWordsAction({}))
  }, [])
}

export { useGetDefaultWords }