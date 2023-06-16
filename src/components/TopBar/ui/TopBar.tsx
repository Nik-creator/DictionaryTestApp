import { AppLink } from '@/ui/AppLink'
import { Typography } from '@/ui/Typography'
import React from 'react'
import styles from './TopBar.module.scss'
import { useGetLink } from '../hooks/useGetLink'


const TopBar = () => {
  const Link = useGetLink()

  return (
    <div className={styles.container}>
      <div />
      <Link />
    </div>
  )
}

export { TopBar }
