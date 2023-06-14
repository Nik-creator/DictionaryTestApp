import { Skeleton } from '@/ui/Skeleton'
import React from 'react'
import styles from './Search.module.scss'

const SearchGroupSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <Skeleton
        width={'100%'}
        height={250}
        border={'10'}
      />
    </div>
  )
}

export { SearchGroupSkeleton }
