import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import App from './App.jsx'
import Upload from "./Pages/Upload.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="*" element={<App />} />
          </Routes>
      </Router>
  </React.StrictMode>,
)
