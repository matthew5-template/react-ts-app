import React, { useState, Component } from 'react'
import style from './child.scss'

const Child = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={style.wrapper} onClick={() => setCount(count + 1)}>
      <span className={style.child}>hello child.js {count}</span>
    </div>
  )
}

export default Child
