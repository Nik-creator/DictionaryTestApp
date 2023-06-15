import { useGetMeaningById } from '@/store/words/selectors'
import { Card } from '@/ui/Card/ui/Card'
import React, { useMemo } from 'react'
import { useDnD } from '../hooks/useDnD'
import { StarIcon } from './StarIcon'
import styles from './Search.module.scss'

type OwnProps = {
  id: string
  index: number
  groupId: number
}

const SearchItem = ({ id, index, groupId }: OwnProps) => {
  const { translation } = useGetMeaningById(id)

  const {
    isDragging,
    ref,
    handlerId
  } = useDnD({
    groupId,
    id,
    index
  })

  const opacity = useMemo(() => isDragging ? 0 : 1  , [isDragging])

  return (
    <Card classNames={styles.container} style={{ opacity }} ref={ref} data-handler-id={handlerId}>
      {translation?.text}
      <div style={{
        cursor: 'pointer'
      }}>
        <StarIcon id={id} />
      </div>
    </Card>
  )
}

export { SearchItem }