import { AppLink } from '@/ui/AppLink'
import { Typography } from '@/ui/Typography'
import React from 'react'
import styles from './TopBar.module.scss'
import { useGetTitle } from '../hooks/useGetTitle'


const TopBar = () => {
  const {
    title,
    routePath
  } = useGetTitle()

  return (
    <div className={styles.container}>
      <div />
      <AppLink to={routePath} className={styles.link}>{title}</AppLink>
    </div>
  )
}

export { TopBar }
