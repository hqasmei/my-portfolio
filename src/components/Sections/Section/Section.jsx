import "./Section.css"
import React from "react"
import { Col, Row } from "antd"

function Section({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
}) {
  return (
    <>
      <div className={lightBg ? "home-section" : "home-section darkBg"}>
        <div className="container">
          <Row
            type="flex"
            style={{ alignItems: "center", marginTop: 10 }}
            justify="center"
            gutter={10}
          >
            <Col md={12} lg={10} className="col-bkg">
              <div className="home-text-wrapper">
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
              </div>
            </Col>
            <Col md={12} lg={10}>
              <div className="home-img-wrapper">
                <img src={img} alt={alt} className="home-img" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Section
