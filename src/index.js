import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { GlobalStyled } from '@/assets/styled'
import '@/common/libs'
import App from './App'
import store from './store'

const renderElement = document.getElementById('root')
const AppRender = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyled />
        <App />
      </>
    </Provider>
  )
}

ReactDOM.render(<AppRender />, renderElement)
