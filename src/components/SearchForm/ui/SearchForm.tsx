import { Input } from '@/ui/Input'
import React from 'react'
import { useSearchInput } from '../hooks/useSearchInput'

const SearchForm = () => {
  const [inputValue, changeInputValue] = useSearchInput()

  return (
    <div>
      <Input
        value={inputValue}
        changeText={changeInputValue}
        placeholder='Поиск'
      />
    </div>
  )
}

export { SearchForm }