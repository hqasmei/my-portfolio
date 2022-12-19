import React from "react"
import { Content } from "../components/Content/Content"
// import Carousel from "../components/Carousel/Carousel"
import { heroOne } from "../data/HeroData"

const Home = () => {
  return (
    <>
      <Content {...heroOne} />
      {/* <Carousel /> */}
    </>
  )
}

export default Home
