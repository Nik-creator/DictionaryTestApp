import type { ReactElement } from "react"

type Variant = 'title' | 'subtitle' | 'secondary'

type TextType = { [K in Variant]?: {
  style: any, //FIXME: нормальный тип
  //TODO: добавить поддержку тегов
  // tag: ReactElement
} }

export type { Variant, TextType }