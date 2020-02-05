import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import './common/stylus/frame.styl'

const AppProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(AppProvider, document.getElementById('root'))
