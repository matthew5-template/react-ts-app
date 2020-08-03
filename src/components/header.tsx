import React, { useState } from 'react'

interface Props {
  title: string
  content: string
}
type State = number

const Header = (props: Props) => {
  const [count, setCount] = useState<State>(0)
  return (
    <div onClick={() => setCount(count + 1)}>
      <span>{`${props.title} - ${props.content}: ${count}`}</span>
    </div>
  )
}

export default Header
