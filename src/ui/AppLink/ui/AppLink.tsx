import { cls } from '@/utils/classNames'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './AppLink.module.scss'

type OwnProps = {
  to: string
  children: ReactNode
  className?: string;
}

const AppLink = ({ to, children, className }: OwnProps) => {
  return <Link to={to} className={cls(styles.link, {}, [className])}>{children}</Link>
}

export { AppLink }