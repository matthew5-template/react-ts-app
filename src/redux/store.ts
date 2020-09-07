import { createStore } from 'redux-saga-easy'
import { get, throttle } from 'lodash'
// import { routerMiddleware } from 'react-router-redux'
// import history from '@/utils/history'
import globalStore from '@/redux/globalStore'
import contactsSaga from './saga/contacts'
import contacts from './reducers/contacts'

const sagaModels = [contactsSaga]
const reducerModels = {
  contacts
}

const showError = throttle((errorMsg: string) => {
  console.error(errorMsg)
}, 1000)

const errorHandler = (error: Error) => {
  console.error(error)
  const errorMsg =
    get(error, 'response.data.message') ||
    get(error, 'message') ||
    'Oops, unknown error!'
  // Why just IE show this error msg?
  if (errorMsg.toLowerCase() !== 'syntaxerror') {
    showError(errorMsg)
  }
}

const disableDevTool = false
const otherMiddlewares = [] //[routerMiddleware(history)]

const store = createStore(
  sagaModels,
  reducerModels,
  errorHandler,
  disableDevTool,
  otherMiddlewares
)
globalStore.setStore(store)

export default store
