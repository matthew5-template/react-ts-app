import React, { Component } from 'react'
import venom from '../assets/venom.png'
import { connect } from 'react-redux'
import { RootState, Dispatch, store } from '../store'

const mapState = (state: RootState) => ({
  count: state.count
})

const dispatch = store.dispatch as Dispatch

// const mapDispatch = (dispatch: Dispatch) => ({
//   increment: (count: number) => dispatch.count.increment(count),
//   incrementAsync: (count: number) => dispatch.count.incrementAsync(count)
// })

// type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = ReturnType<typeof mapState>

class Info extends Component<Props> {
  onChange = () => {
    // this.props.increment(2)
    // this.props.incrementAsync(2)
    dispatch.count.increment(2)
  }

  render() {
    const { count } = this.props
    return (
      <div onClick={this.onChange}>
        <span>hello info.js {count}</span>
        <img src={venom} style={{ width: 60 }} />
      </div>
    )
  }
}

// export default connect(mapState, mapDispatch as any)(Info)
export default connect(mapState)(Info)
