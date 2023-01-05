import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"

import * as constants from "./constants"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import MyProjects from "./pages/MyProjects"
import MyProject from "./pages/MyProject"
import MyExperience from "./pages/MyExperience"
import MyReadingList from "./pages/MyReadingList"

const themes = {
  light: constants.LIGHT_THEME,
  dark: constants.DARK_THEME,
}

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path={constants.ROUTE_HOME} element={<Home />} />
          <Route path={constants.ROUTE_PROJECTS} element={<MyProjects />} />
          <Route
            path={`${constants.ROUTE_PROJECTS}/:${constants.ROUTE_PROJECT_ID}`}
            element={<MyProject />}
          />

          <Route path={constants.ROUTE_EXPERIENCE} element={<MyExperience />} />
          <Route
            path={constants.ROUTE_READING_LIST}
            element={<MyReadingList />}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
export default App
