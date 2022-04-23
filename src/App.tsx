import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import store from '@/store'
import { Provider } from 'react-redux'
import Layout from './views/Layout'
import ParticleWave from './utils/function/background'
const App = () => {
  useEffect(() => {
    // @ts-ignore
    new ParticleWave(document.querySelector('#background') as HTMLCanvasElement).run()
  }, [])
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout />
        <canvas id="background"></canvas>
      </HashRouter>
    </Provider>
  )
}

export default App;
