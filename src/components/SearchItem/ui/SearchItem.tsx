import { useGetMeaningById } from '@/store/words/selectors'
import { Card } from '@/ui/Card/ui/Card'
import React, { useMemo } from 'react'
import styles from './Search.module.scss'
import { StarIcon  } from '@/components/StarIcon'
import { useDnD } from '@/hooks/useDnD'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { changeMeaningsPosition } from '@/store/words/slice'
import { useSearchItemDnD } from '../hooks/useSearchItemDnD'

type ChangePosition = {
  dragIndex: number
  hoverIndex: number
  id?: number
}

type OwnProps = {
  id: string
  index: number
  groupId: number
}

const SearchItem = ({ id, index, groupId }: OwnProps) => {
  const { translation } = useGetMeaningById(id)

  const {
    handlerId,
    ref,
    styles: {
      opacity
    }
  } = useSearchItemDnD({
    groupId,
    id,
    index
  })

  return (
    <Card classNames={styles.container} style={{ opacity }} ref={ref} data-handler-id={handlerId}>
      {translation?.text}
        <StarIcon id={id} />
    </Card>
  )
}

export { SearchItem }