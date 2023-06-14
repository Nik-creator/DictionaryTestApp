import React, { ReactNode } from 'react'
import type { TextType, Variant } from '../types/text'
import styles from './Typography.module.scss'

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
}

const Typography = ({ children, variant = 'title' }: OwnProps) => {

  const { style } = TEXT_TYPE[variant] || {}

  return (
    <div className={style}>{children}</div>
  )
}

export { Typography }