import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
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
      <div className="hero-left hero-darkBg">
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="home-text-wrapper">
                <h1>{topLine}</h1>
                <h2>{headline}</h2>
                <p>{description}</p>
                <Link to="/projects">
                  <a href="/projects" className="cta-btn">
                    {buttonLabel}
                  </a>
                </Link>
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
export default HeroSection
