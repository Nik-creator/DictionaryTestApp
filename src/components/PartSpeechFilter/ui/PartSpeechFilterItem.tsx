import { partsOfSpeech } from '@/constants'
import { PartOfSpeechCode } from '@/store/words/types'
import { Typography } from '@/ui/Typography'
import React, { memo } from 'react'
import styles from './PartSpeech.module.scss'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { filterPartOfSpeechValues } from '@/store/words/slice'

type OwnProps = {
  speechCode: PartOfSpeechCode
  checked?: boolean
}

const PartSpeechFilterItem = memo(({ speechCode, checked = false }: OwnProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(filterPartOfSpeechValues({
      speechCode,
      value: !checked
    }))
  }

  return (
    <div className={styles.filterItemContainer} onClick={handleClick} >
      <input type='checkbox' checked={checked}/>
      <Typography className={styles.filterItem} variant='subtitle'>{partsOfSpeech[speechCode]}</Typography>
    </div>
  )
})

export { PartSpeechFilterItem }
