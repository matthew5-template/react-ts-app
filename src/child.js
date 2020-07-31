import React from 'react'
import style from './child.scss'

const Child = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.child}>hello child.js</span>
    </div>
  )
}

export default Child
