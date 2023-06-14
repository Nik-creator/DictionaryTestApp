import React, { HTMLProps, ReactNode, forwardRef } from 'react'
import styles from './Card.module.scss'

type OwnProps = HTMLProps<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, OwnProps>((props, ref) => (
  <div ref={ref} className={styles.container} {...props}>{props.children}</div>
))

export { Card }