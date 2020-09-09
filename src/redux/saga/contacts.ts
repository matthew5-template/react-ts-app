import {
  createSaga,
  createSaga0,
  createReducer,
  createReducer0,
  SagaModel,
  ModelAction
} from 'redux-saga-easy'
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

class Contacts extends SagaModel {
  initState: IStore.IContacts = {
    contact: ''
  }

  // TODO: how to generate reducers and sagas action type
  // TODO: refactor
  reducers = [
    function updateContacts(
      state: IStore.IContacts,
      action: ModelAction<string>
    ) {
      console.log('update contact in reducer')
      return {
        contact: action.payload
      }
    }
  ]
  // TODO: refactor
  sagas = [
    function* calculateContacts(action: ModelAction<string>) {
      const result = parseInt(action.payload) * 2
      console.log('after calculateContacts')
      return result
    },
    (() => {
      const gen = function* getContacts(
        this: Contacts,
        action: ModelAction<number>
      ) {
        // yield call(delay, 1)
        const res = yield yield put(this.calculateContacts(action.payload))
        yield put(this.updateContacts(res))
        console.log('after updateContacts')
      }
      return gen.bind(this)
    })()
  ]

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
    action: ModelAction<number>
  ) {
    const result = action.payload * 2
    console.log('after calculateContacts')
    return result
  })

  calculateContacts0 = createSaga0(function* calculateContacts0() {
    console.log('after calculateContacts')
    return 100
  })

  // TODO: babel plugin to compile
  getContacts = createSaga(function* getContacts(
    this: Contacts,
    action: ModelAction<number>
  ) {
    console.log('getContacts', this)
    // yield call(delay, 1)
    const res = yield yield put(this.calculateContacts(action.payload))
    yield put(this.updateContacts(res))
    console.log('after updateContacts')
  })

  getContacts0 = createSaga0(function* getContacts0(this: Contacts) {
    const res = yield yield put(this.calculateContacts0())
    yield put(this.updateContacts(res))
    console.log('after updateContacts')
  })
}

export default new Contacts()
