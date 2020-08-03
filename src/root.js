import React, { Suspense } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

// import Child from './child'
// import Info from './info'

const Root = () => {
  return (
    <div>
      <span>hello root.js</span>
      <Suspense fallback={<div>Loading...</div>}>
        <HashRouter>
          <Switch>
            {/* <Route exact path="/child" component={Child} /> */}
            {/* <Route path="/child/info" component={Info} /> */}
            {renderRoutes(routes)}
          </Switch>
        </HashRouter>
      </Suspense>
    </div>
  )
}

export default Root
