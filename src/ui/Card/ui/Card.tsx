import React, { HTMLProps, ReactNode, forwardRef } from 'react'
import styles from './Card.module.scss'
import { cls } from '@/utils/classNames'

type OwnProps = HTMLProps<HTMLDivElement> & {
  classNames?: string
}

const Card = forwardRef<HTMLDivElement, OwnProps>((props, ref) => (
  <div ref={ref} className={cls(styles.container, {}, [props.classNames])} {...props}>{props.children}</div>
))

export { Card }