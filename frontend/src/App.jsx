import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx"
import Upload from "./Pages/Upload.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Footer from "./components/Footer.jsx";
import RootLayout from "./layouts/RootLayout.jsx";

function App() {

  return (
    <>
      <div className="pages">
        <Router>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
