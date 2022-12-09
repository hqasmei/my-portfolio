import React from "react"

import { sowTedTalks, sowPodcasts } from "../data"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap"

import { BreadCrumb } from "./BreadCrumb"

import "./SowView.css"

const SowView = () => {
  return (
    <>
      <div className="snippets-of-wisdom-section snippets-of-wisdom-darkBg">
        <BreadCrumb />
        <Container className="snippets-text-wrapper">
          <h1>Snippets Of Wisdom</h1>
          <p>
            Here are a complelation of TED talks, authors, articles, videos,
            podcasts, and quotes that I like to reference time to time.
          </p>
          <Row xs={1} lg={2} className="g-4">
            <Col>
              <Card className="resources-card-text h-100">
                <Card.Header as="h5">Ted Talks</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {sowTedTalks.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                            >
                              {val.title}
                            </a>
                            , {val.speaker}
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="resources-card-text h-100">
                <Card.Header as="h5">Podcasts</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {sowPodcasts.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                            >
                              {val.title}
                            </a>
                            , {val.speaker}
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SowView
