import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
// import About from "./pages/About"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      {/* <About /> */}
      <Footer />
    </Router>
  )
}
