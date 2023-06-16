import { ItemTypes } from '@/enums/itemTypes'
import { useDnD } from '@/hooks/useDnD'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { changeMeaningsPosition } from '@/store/words/slice'
import React, { useMemo } from 'react'

type ChangePosition = {
  dragIndex: number
  hoverIndex: number
  id?: number
}

type OwnProps = {
  groupId: number
  id: string
  index: number
}

const useSearchItemDnD = ({
  groupId,
  id,
  index
}: OwnProps) => {
  const dispatch = useAppDispatch()

  const changePosition = ({
    dragIndex,
    hoverIndex,
    id
  }: ChangePosition) => {
    dispatch(changeMeaningsPosition({
      dragIndex,
      hoverIndex,
      groupId: id || 0
    }))
  }

  const {
    handlerId,
    isDragging,
    ref
  } = useDnD({
    id,
    groupId,
    changePosition,
    index,
    type: ItemTypes.CARD
  })

  const opacity = useMemo(() => isDragging ? 0 : 1  , [isDragging])

  return {
    handlerId,
    ref,
    styles: {
      opacity
    }
  }
}

export { useSearchItemDnD }