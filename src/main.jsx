import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './home.jsx'
import './assets/styles/style.scss'
import { NavBar } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>,
)
