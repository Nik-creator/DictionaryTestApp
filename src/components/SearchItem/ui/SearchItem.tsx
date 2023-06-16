import { useGetMeaningById } from '@/store/words/selectors'
import { Card } from '@/ui/Card/ui/Card'
import React, { useState } from 'react'
import styles from './Search.module.scss'
import { StarIcon  } from '@/components/StarIcon'
import { useSearchItemDnD } from '../hooks/useSearchItemDnD'
import { partsOfSpeech } from '@/constants'
import { Typography } from '@/ui/Typography'


type OwnProps = {
  id: string
  index: number
  groupId: number
}

const SearchItem = ({ id, index, groupId }: OwnProps) => {
  const [isActive, setActive] = useState(false)

  const toggleAccordion = () => {
    setActive((prev) => !prev)
  }

  const {
    translation: {
      note,
      text
    } = {},
    partOfSpeechCode,
    transcription
  } = useGetMeaningById(id)

  const {
    handlerId,
    ref,
    styles: {
      opacity
    }
  } = useSearchItemDnD({
    groupId,
    id,
    index
  })

  return (
    <Card style={{ opacity }} ref={ref} data-handler-id={handlerId}>
      <div className={styles.container}>
      <div onClick={toggleAccordion}>
        <div className={styles.meaningContainer}>
          <Typography variant='subtitle'>Значение:&nbsp;</Typography>
          <Typography variant='subtitle'>
            {text}
          </Typography>
        </div>
        <div className={styles.meaningContainer}>
          <Typography variant='secondary'>Часть речи:&nbsp;</Typography>
          <Typography variant='secondary'>{partsOfSpeech[partOfSpeechCode]}</Typography>
        </div>
      </div>
      <StarIcon id={id} />
      </div>
      {isActive && (
        <div className={styles.meaningContainer}>
           <Typography variant='secondary'>Транскрипция:&nbsp;</Typography>
           <Typography variant='secondary'>[{transcription}]</Typography>
        </div>
      )}
    </Card>
  )
}

export { SearchItem }