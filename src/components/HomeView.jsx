import React from "react"
// import { Link } from "react-router-dom"

import { homeData } from "../data"

import * as constants from "../constants"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import "./HomeView.css"

const HomeView = () => {
  const { topLine, headline, description, buttonLabel, img, alt } = homeData

  return (
    <>
      <div className="hero-left hero-darkBg">
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="home-text-wrapper">
                <h1>{topLine}</h1>
                <h2>{headline}</h2>
                <p>{description}</p>
                <a href={constants.ROUTE_PROJECTS} className="cta-btn">
                  {buttonLabel}
                </a>
              </div>
            </Col>
            <Col>
              <div className="home-img-wrapper">
                <img src={img} alt={alt} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HomeView
