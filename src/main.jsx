import React from 'react'
import { createRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/tweet-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
