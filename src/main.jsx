import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { LogiRoute } from './LogiRoute.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <LogiRoute/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
