import React from 'react'
import ReactDom from 'react-dom'
import Root from './root'

console.log('refresh')
const appNode = document.getElementById('app')
ReactDom.render(<Root />, appNode)

if (module.hot) {
  module.hot.accept('./root', function () {
    ReactDom.render(<Root />, appNode)
  })
}
