import React, { useEffect } from "react"
import ReactGA from "react-ga"
import "./Home.css"

const Home = () => {
  useEffect(() => {
    // non interaction
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home
