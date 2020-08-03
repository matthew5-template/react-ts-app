import React from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: "info" */ './info'))
  },
  {
    path: '/child',
    exact: true,
    component: React.lazy(() =>
      import(/* webpackChunkName: "child" */ './child')
    )
    // 不支持嵌套
    // routes: [
    //   {
    //     path: '/info',
    //     component: Info
    //   }
    // ]
  },
  {
    path: '/child/info',
    component: React.lazy(() => import(/* webpackChunkName: "info" */ './info'))
  }
]

export default routes
