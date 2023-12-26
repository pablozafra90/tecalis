import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './home.jsx'
import './assets/styles/style.scss'
import { NavBar, Footer } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Footer />
  </React.StrictMode>,
)
