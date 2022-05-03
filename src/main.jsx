import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import store from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './config/chakra.config'
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
