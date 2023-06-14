import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { fetchWordsAction } from '@/store/words/actions'
import React, { useCallback, useState } from 'react'
import { REQUEST_DELAY } from '../constants'
import { resetWords } from '@/store/words/slice'

const useSearchInput = () => {
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

  const changeDebounceValue = useDebounce({
    delay: REQUEST_DELAY,
    onApply: getWords,
    onChange: changeInputValue
  })

  return [inputValue, changeDebounceValue] as const
}

export { useSearchInput }