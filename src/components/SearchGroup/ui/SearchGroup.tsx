import React from 'react'
import { SearchItem } from '@/components/SearchItem'
import { useGroupEntityById } from '@/store/words/selectors'
import { Typography } from '@/ui/Typography'
import { EntityId } from '@reduxjs/toolkit'
import styles from './Search.module.scss'

type OnwProps = {
  id: EntityId
}

const SearchGroup = ({ id: groupId }: OnwProps) => {
  const { entity } = useGroupEntityById(groupId) || {}

  if (!entity) return <></>

  const { meaningsIds, text } = entity

  return (
    <div className={styles.container}>
      <Typography variant='subtitle'>{text}</Typography>
      {meaningsIds.map((id, index) => (
        <SearchItem key={id} id={id} index={index} groupId={Number(groupId)} />
      ))}
    </div>
  )
}

export { SearchGroup }