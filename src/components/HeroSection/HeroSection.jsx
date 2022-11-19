import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import "./HeroSection.css"

const HeroSection = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <div className="hero-section hero-darkBg">
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col className="home-text-wrapper">
              <div>
                <div className="top-line">{topLine}</div>
                <h1 className="heading">{headline}</h1>
                <p className="home-subtitle">{description}</p>
                <Link to="/projects">
                  <Button variant="dark">{buttonLabel}</Button>
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
export default HeroSection
