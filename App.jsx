import React from 'react'
import AppNavigation from './screens/AppNavigation'
import store from './screens/Themes/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <AppNavigation/>
    </Provider>
  )
}

export default App
