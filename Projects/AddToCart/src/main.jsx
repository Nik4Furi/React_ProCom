import React from 'react'
import ReactDOM from 'react-dom/client'


import { Provider } from 'react-redux'
import Store from './Store/Store'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  // </React.StrictMode>,
)
