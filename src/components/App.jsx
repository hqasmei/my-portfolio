import React from "react"
import { useState } from "react"

import { ThemeProvider } from "styled-components"

import TopNav from "./TopNav"
// import Footer from "./Footer"
import HeroSection from "./HeroSection"
// import ProjectsSection from "./ProjectsSection"
// import ResourcesSection from "./ResourcesSection"

const LightTheme = {
  pageBackground: "#f1f4f8",
  primary: "#293238",
  primaryHue: "#d3dade",
  secondary: "#f1f4f8",
  secondaryHue: "#2b3d55",
  colorGradient:
    "linear-gradient(90deg, rgba(67, 9, 121, 1) 33%, rgba(255, 0, 228, 1) 100%)",
}

const DarkTheme = {
  pageBackground: "#293238",
  primary: "#f1f4f8",
  primaryHue: "#334966",
  secondary: "#293238",
  secondaryHue: "#2b3d55",
  colorGradient:
    "linear-gradient(90deg, rgba(67, 9, 121, 1) 33%, rgba(255, 0, 228, 1) 100%)",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <div>
        <TopNav theme={theme} setTheme={setTheme} />
        <HeroSection/>
      </div>
    </ThemeProvider>
  )
}
export default App
