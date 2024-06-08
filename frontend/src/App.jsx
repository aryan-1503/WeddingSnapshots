import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx"
import Upload from "./Pages/Upload.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

function App() {

  return (
    <>
      <Header />
      <div className="pages">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
