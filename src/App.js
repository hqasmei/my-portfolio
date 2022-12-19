import React from "react"
import { useState } from "react"

import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"

import { LightTheme, DarkTheme } from "./constants"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}
export default App
