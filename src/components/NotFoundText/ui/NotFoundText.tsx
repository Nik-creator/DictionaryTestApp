import React from 'react'
import styles from './NotFoundText.module.scss'
import { Typography } from '@/ui/Typography'

type OwnProps = {
  text: string
}

const NotFoundText = ({ text }: OwnProps) => {
  return (
    <Typography variant='title' className={styles.text}>{text}</Typography>
  )
}

export { NotFoundText }