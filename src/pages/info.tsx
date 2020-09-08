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

  onChange = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      async () => {
        const { count } = this.state
        // await contactsSaga.getContacts0(true)
        await contactsSaga.getContacts(count, true)
        // if (this.state.count % 2) {
        //   await contactsSaga.getContacts('123', true)
        //   console.log('after calculateContacts')
        // } else {
        //   await contactsSaga.updateContacts('2333', true)
        // }
      }
    )
  }

  render() {
    const { contact } = this.props
    const { count } = this.state
    return (
      <div onClick={this.onChange}>
        <span>
          hello info.js {contact}, count: {count}
        </span>
        <img src={venom} style={{ width: 60 }} />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Info)
