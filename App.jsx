import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import store, { persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation/>
        </PersistGate>
    </Provider> 
  )
}