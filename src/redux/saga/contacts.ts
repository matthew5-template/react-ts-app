import {
  createSaga,
  createReducer,
  BaseSaga,
  ModelAction
} from '@/redux-saga-easy'
import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  take
} from 'redux-saga/effects'

const delay = (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, 1000 * second))
}

class Contacts extends BaseSaga {
  initState: IStore.IContacts = {
    contact: ''
  }
  updateContacts = createReducer(function updateContacts(
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

  calculateContacts = createSaga(function* calculateContacts(
    action: ModelAction<string>
  ) {
    const result = parseInt(action.payload) * 2
    console.log('after calculateContacts')
    return result
  })

  // TODO: babel plugin to compile
  getContacts = createSaga(
    (() => {
      const gen = function* getContacts(
        this: Contacts,
        action: ModelAction<string>
      ) {
        // yield call(delay, 1)
        const res = yield yield put(this.calculateContacts(action.payload))
        yield put(this.updateContacts(res))
        console.log('after updateContacts')
      }
      return gen.bind(this)
    })()
  )
}

export default new Contacts()
