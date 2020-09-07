import React, { Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import Header from './components/header'
import history from './utils/history'
import { Provider } from 'react-redux'
import store from '@/redux/store'
// import { ConnectedRouter } from 'react-router-redux'

// import Child from '@/pages/child'
// import Info from '@/pages/info'

const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <Header title={'hello'} content={'root.js'} />
        <Suspense fallback={<div>Loading...</div>}>
          <Router history={history}>
            <Switch>
              {/* <Route exact path="/child" component={Child} /> */}
              {/* <Route path="/child/info" component={Info} /> */}
              {renderRoutes(routes)}
            </Switch>
          </Router>
        </Suspense>
      </div>
    </Provider>
  )
}

export default Root
