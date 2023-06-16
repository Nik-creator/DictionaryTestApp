import React, { ReactNode } from 'react'
import type { TextType, Variant } from '../types/text'
import styles from './Typography.module.scss'
import { cls } from '@/utils/classNames'

const TEXT_TYPE: TextType = {
  title: {
    style: styles.title
  },
  secondary: {
    style: styles.secondary
  },
  subtitle: {
    style: styles.subtitle
  }
}

type OwnProps = {
  variant?: Variant,
  children: ReactNode
  className?: string
}

const Typography = ({ children, variant = 'title', className }: OwnProps) => {

  const { style } = TEXT_TYPE[variant] || {}

  return (
    <div className={cls(style, {}, [className])}>{children}</div>
  )
}

export { Typography }