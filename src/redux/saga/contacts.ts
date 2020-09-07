import { createAction, BaseSaga, ModelAction } from '@/redux-saga-easier'
import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  take
} from '@/redux-saga-easier/effects'
import reducer from '@/redux/reducers/contacts'

const delay = (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, 1000 * second))
}

class Contacts extends BaseSaga {
  calculateContacts = createAction(function* get(action: ModelAction<string>) {
    // yield call(delay, 1)
    const result = parseInt(action.payload) * 2
    yield put(reducer.updateContacts(result.toString()))
    console.log('after updateContacts')
  })
}

export default new Contacts()
