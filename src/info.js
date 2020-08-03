import React, { Component } from 'react'

class Info extends Component {
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
      <div onClick={this.onChange}>
        <span>hello info.js {count}</span>
      </div>
    )
  }
}

export default Info
