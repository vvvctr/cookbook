import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={'/'}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home
              <br />
              <a href="/new/#/about">About (new)</a>
            </div>
          }
        />
        <Route path="/about/" element={<div>About</div>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
