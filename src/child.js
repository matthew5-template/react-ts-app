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

class Child2 extends Component {
  state = {
    count: 0
  }

  onChange = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <div className={style.wrapper} onClick={this.onChange}>
        <span className={style.child}>hello child2.js {count}</span>
      </div>
    )
  }
}

export default Child
