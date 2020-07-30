import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { GlobalStyled } from '@/assets/styled'
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
