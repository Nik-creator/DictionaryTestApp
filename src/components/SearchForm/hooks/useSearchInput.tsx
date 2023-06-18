import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { fetchWordsAction } from '@/store/words/actions'
import React, { useCallback, useState } from 'react'
import { REQUEST_DELAY } from '../constants'
import { resetWords, searchFromFavorites } from '@/store/words/slice'
import { useIsFavoriteScreen } from '@/hooks/useIsFavoriteScreen'


const useSearchInput = () => {
  const isFavoriteScreen = useIsFavoriteScreen()

  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const changeInputValue = useCallback((value: string) => {
    setInputValue(value)
  }, [])

  const getWords = useCallback((value: string) => {
    dispatch(resetWords())
    dispatch(fetchWordsAction({
      search: value
    }))
  }, [])

  const searchWordInState = useCallback((value: string) => {
    dispatch(searchFromFavorites(value))
  }, [])

  const changeDebounceValue = useDebounce({
    delay: REQUEST_DELAY,
    onApply: isFavoriteScreen ? searchWordInState : getWords,
    onChange: changeInputValue
  })

  return [inputValue, changeDebounceValue] as const
}

export { useSearchInput }