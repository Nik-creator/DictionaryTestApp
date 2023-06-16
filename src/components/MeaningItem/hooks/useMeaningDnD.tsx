import { ItemTypes } from '@/enums/itemTypes'
import { useDnD } from '@/hooks/useDnD'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { changeFavoritesPosition } from '@/store/words/slice'
import React, { useMemo } from 'react'

type OwnProps = {
  id: string
  index: number
}

type ChangePosition = {
  dragIndex: number
  hoverIndex: number
}

const useMeaningDnD = ({ id, index }: OwnProps) => {
  const dispatch = useAppDispatch()

  const changePosition = ({
    dragIndex,
    hoverIndex
  }: ChangePosition) => {
    dispatch(changeFavoritesPosition({
      dragIndex,
      hoverIndex
    }))
  }

  const {
    handlerId,
    isDragging,
    ref
  } = useDnD({
    id,
    index,
    changePosition,
    type: ItemTypes.FAVORITE_ITEM
  })

  const opacity = useMemo(() => isDragging ? 0 : 1  , [isDragging])

  return {
    ref,
    styles: {
      opacity
    },
    handlerId
  }
}

export { useMeaningDnD }