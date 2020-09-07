import { createAction, BaseReducer, ModelAction } from 'redux-saga-easy'

class Contacts extends BaseReducer {
  initState: IStore.IContacts = {
    contact: ''
  }

  updateContacts = createAction(function updateContacts(
    state: IStore.IContacts,
    action: ModelAction<string>
  ) {
    console.log('update contact in reducer')
    return {
      contact: action.payload
    }
    // TODO: cannot find type error by return state
    // return {
    //   items: action.payload
    // }
  })
}

export default new Contacts()
