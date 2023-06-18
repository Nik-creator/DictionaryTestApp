
import React from 'react'
import { useRenderFilterItem } from '../hooks/useRenderFilterItem'
import { Typography } from '@/ui/Typography'
import styles from './PartSpeech.module.scss'

const PartSpeechFilter = () => {
  const render = useRenderFilterItem()

  return (
    <div>
    <Typography className={styles.filterTitle} variant='subtitle'>
      Части речи:
    </Typography>
      {render}
    </div>
  )
}

export { PartSpeechFilter }