import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
  )
}

export { Loader }