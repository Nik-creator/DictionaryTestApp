import { Skeleton } from '@/ui/Skeleton'
import React from 'react'
import styles from './Meaning.module.scss'

const MeaningItemSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton
        width={'100%'}
        height={50}
        border={'10'}
      />
    </div>
  )
}

export { MeaningItemSkeleton }