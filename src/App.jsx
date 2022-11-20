import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "antd/dist/reset.css"
import "./App.css"
// fonts
import "./fonts/Aileron/Aileron-Bold.otf"
import "./fonts/Aileron/Aileron-Regular.otf"

// components
import TopNav from "./components/TopNav/TopNav"
import Footer from "./components/Footer/Footer"
import Books from "./components/ResourcesSection/Books/Books"
import ProgrammingResources from "./components/ResourcesSection/ProgrammingResources/ProgrammingResources"
import SnippetsOfWisdom from "./components/ResourcesSection/SnippetsOfWisdom/SnippetsOfWisdom"

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
          <Route path="/resources/books" element={<Books />} />
          <Route
            path="/resources/programming-resources"
            element={<ProgrammingResources />}
          />
          <Route
            path="/resources/snippets-of-wisdom"
            element={<SnippetsOfWisdom />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
