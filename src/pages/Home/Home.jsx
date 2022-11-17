import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { homeObjOne } from "./Data"

import ReactGA from "react-ga"
import "./Home.css"

const Home = () => {
  const {
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
  } = homeObjOne

  useEffect(() => {
    // non interaction
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <>
      <div className={lightBg ? "home-section" : "home-section darkBg"}>
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col className="home-text-wrapper">
              <div>
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc ? "home-subtitle" : "home-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/projects">
                  <Button variant="success">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </Col>
            <Col>
              <div className="home-img-wrapper">
                <img src={img} alt={alt} className="home-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
