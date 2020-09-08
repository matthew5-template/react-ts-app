import React, { Component } from 'react'
import venom from '../assets/venom.png'
import { connect } from 'react-redux'
import contactsSaga from '@/redux/saga/contacts'

const mapStateToProps = (state: IStore.IRoot) => ({
  contact: state.contacts.contact
})

type Props = ReturnType<typeof mapStateToProps>

class Info extends Component<Props> {
  state = {
    count: 0
  }

  onChange = async () => {
    await contactsSaga.getContacts('111', true)
    // if (this.state.count % 2) {
    //   await contactsSaga.getContacts('123', true)
    //   console.log('after calculateContacts')
    // } else {
    //   await contactsSaga.updateContacts('2333', true)
    // }

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { contact } = this.props
    const { count } = this.state
    return (
      <div onClick={this.onChange}>
        <span>hello info.js {contact}</span>
        <span>count: {count}</span>
        <img src={venom} style={{ width: 60 }} />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Info)
