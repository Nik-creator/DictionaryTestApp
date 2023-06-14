import { ChangePositionProps } from "../words/types";

type OnwProps = ChangePositionProps & {
  state: string[]
}

const changePosition = ({ dragIndex, hoverIndex, state }: OnwProps) => {
  const arrayDraft = [...state]

  arrayDraft[hoverIndex] = arrayDraft.splice(dragIndex, 1, arrayDraft[hoverIndex])[0]

  return arrayDraft
}

export { changePosition }