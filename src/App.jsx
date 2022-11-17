import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// fonts
import "./fonts/Aileron/Aileron-Bold.otf"
import "./fonts/Aileron/Aileron-Regular.otf"

// components
import TopNav from "./components/TopNav/TopNav"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Resources from "./pages/Resources/Resources"

import ReactGA from "react-ga"
const TRACKING_ID = "UA-151549955-1" // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
