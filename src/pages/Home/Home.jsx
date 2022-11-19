import React from "react"
import HeroSection from "../../components/HeroSection/HeroSection"
import { homeOne } from "./Data"
import "./Home.css"

const Home = () => {
  return (
    <>
      <HeroSection {...homeOne} />
    </>
  )
}

export default Home
