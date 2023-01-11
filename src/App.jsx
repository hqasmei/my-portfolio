import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import * as constants from "./constants"

import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import About from "./pages/About"

import Travels from "./pages/Travels"
import Books from "./pages/Books"
import Sports from "./pages/Sports"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path={constants.ROUTE_HOME} element={<Home />} />
        <Route path={constants.ROUTE_EXPERIENCE} element={<Experience />} />
        <Route path={constants.ROUTE_PROJECTS} element={<Projects />} />
        <Route path={constants.ROUTE_ABOUT} element={<About />} />

        <Route
          path={`${constants.ROUTE_ABOUT}/${constants.ROUTE_TRAVELS}`}
          element={<Travels />}
        />
        <Route
          path={`${constants.ROUTE_ABOUT}/${constants.ROUTE_BOOKS}`}
          element={<Books />}
        />
        <Route
          path={`${constants.ROUTE_ABOUT}/${constants.ROUTE_SPORTS}`}
          element={<Sports />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
