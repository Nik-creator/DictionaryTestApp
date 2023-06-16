import { StarIcon } from '@/components/StarIcon'
import { useMeaningById } from '@/store/words/selectors'
import React from 'react'
import styles from './Meaning.module.scss'
import { useMeaningDnD } from '../hooks/useMeaningDnD'

type OwnProps = {
  id: string
  index: number
}

const MeaningItem = ({ id, index }: OwnProps) => {
  const { text } = useMeaningById(id) || {}

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
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className={styles.container}>
      {text}
      {' '}
      {id}
      <StarIcon id={id} />
    </div>
  )
}

export { MeaningItem }