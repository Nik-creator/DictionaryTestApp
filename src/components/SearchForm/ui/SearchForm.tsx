import { Input } from '@/ui/Input'
import React from 'react'
import { useSearchInput } from '../hooks/useSearchInput'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const [inputValue, changeInputValue] = useSearchInput()

  return (
    <div className={styles.container}>
      <Input
        value={inputValue}
        changeText={changeInputValue}
        placeholder='Поиск'
      />
    </div>
  )
}

export { SearchForm }