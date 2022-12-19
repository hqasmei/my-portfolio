import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"

import * as constants from "./constants"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import MyStory from "./pages/MyStory"
import MyExperience from "./pages/MyExperience"

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
          <Route path={constants.ROUTE_MY_STORY} element={<MyStory />} />
          <Route path={constants.ROUTE_MY_EXPERIENCE} element={<MyExperience />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
export default App
