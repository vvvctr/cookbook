import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={'/'}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/about/"
          element={
            <div>
              About
              <br />
              <a href="/#/">Home (Old)</a>
              <a href="/#/about">About (Old)</a>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
