import React, { useRef } from 'react'
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'
import type { Identifier, XYCoord } from 'dnd-core'
import { ItemTypes } from '@/enums/itemTypes'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { changeMeaningsPosition } from '@/store/words/slice'

type OwnProps = {
  index: number
  id: string
  groupId: number
}

interface DragItem {
  index: number
  id: string
  type: string
}

const useDnD = ({ index, groupId, id }: OwnProps) => {
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch(changeMeaningsPosition({
        dragIndex,
        hoverIndex,
        groupId
      }))

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor: DragSourceMonitor<unknown, unknown>) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return {
    ref,
    isDragging,
    handlerId
  }
}

export { useDnD }