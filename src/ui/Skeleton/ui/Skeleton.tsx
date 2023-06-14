import { cls } from '@/utils/classNames'
import React from 'react'
import type { CSSProperties } from 'react'
import styles from './Skeleton.module.scss'

type OwnProps = {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const Skeleton = ({ className, height, width, border }: OwnProps) => {
  const divStyles: CSSProperties = {
      width,
      height,
      borderRadius: border
  };

  return (
    <div
      className={cls(styles.skeleton, {}, [className])}
      style={divStyles}
    />
  );
}

export { Skeleton }