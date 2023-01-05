import React from "react"
import { Content } from "../components/Content/Content"
import { heroOne } from "../data/HeroData"

const Home = () => {
  return (
    <>
      <Content {...heroOne} />
    </>
  )
}

export default Home
