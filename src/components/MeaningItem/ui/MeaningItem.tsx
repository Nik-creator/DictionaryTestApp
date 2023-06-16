import { StarIcon } from '@/components/StarIcon'
import { useMeaningById } from '@/store/words/selectors'
import React, { useMemo, useState } from 'react'
import styles from './Meaning.module.scss'
import { useMeaningDnD } from '../hooks/useMeaningDnD'
import { Card } from '@/ui/Card/ui/Card'
import { Typography } from '@/ui/Typography'
import { partsOfSpeech } from '@/constants'

type OwnProps = {
  id: string
  index: number
}

const MeaningItem = ({ id, index }: OwnProps) => {
  const [isActive, setActive] = useState(false)

  const toggleAccordion = () => {
    setActive((prev) => !prev)
  }

  const {
    text,
    translation: {
      note = '',
      text: translationText = ''
    }  = {},
    partOfSpeechCode,
    examples = []
  } = useMeaningById(id) || {}

  const renderExamples = useMemo(() => examples.map(({ text }) => (
    <Typography key={text} variant='subtitle'> * {text}</Typography>
  )), [examples.length])

  const {
    handlerId,
    ref,
    styles: {
      opacity
    }
  } = useMeaningDnD({
    id,
    index
  })

  return (
    <Card ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <div  className={styles.container}>
        <div onClick={toggleAccordion}>
          <div className={styles.innerContainer}>
            <Typography variant='subtitle'>Слово:&nbsp;</Typography>
            <Typography variant='subtitle'>{text}</Typography>
          </div>
          {translationText && (
            <div className={styles.innerContainer}>
              <Typography variant='subtitle'>Значение:&nbsp;</Typography>
              <Typography variant='subtitle'>{translationText}</Typography>
            </div>
          )}
          {partOfSpeechCode && (
            <div className={styles.innerContainer}>
              <Typography variant='secondary'>Часть речи:&nbsp;</Typography>
              <Typography variant='secondary'>{partsOfSpeech[partOfSpeechCode]}</Typography>
            </div>
          )}
        </div>
        <StarIcon id={id} />
      </div>
      {isActive && (
        <div>
          <Typography variant='subtitle'>Примеры:</Typography>
          {renderExamples}
        </div>
      )}
    </Card>
  )
}

export { MeaningItem }