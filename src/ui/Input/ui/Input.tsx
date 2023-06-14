import React, { ChangeEvent, memo } from 'react'
import SearchIcon from '@/assets/icons/icon-search.svg'
import styles from './Input.module.scss'

type OwnProps = {
  value: string
  changeText: (text: string) => void
  placeholder?: string
}

const Input = memo(({ changeText, value, placeholder = '' }: OwnProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeText(event.target.value)
  }

  return (
    <div className={styles.container}>
      <SearchIcon />
      <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder} />
    </div>
    )
})

export { Input }
