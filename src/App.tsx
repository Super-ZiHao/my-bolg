import React from 'react'
import { HashRouter } from 'react-router-dom'
import store from '@/store'
import { Provider } from 'react-redux'
import Layout from './views/Layout'
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Provider>
  )
}

export default App
