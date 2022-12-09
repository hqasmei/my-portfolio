import React from "react"

import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Container } from "react-bootstrap"

import { BreadCrumb } from "./BreadCrumb"

import { courses, datasets, frontEnd, ide, ml, uxui, web3 } from "../data"

import "./ProgrammingResourcesView.css"

const ProgrammingResourcesView = () => {
  return (
    <>
      <div className="programming-resources-section programming-resources-darkBg">
        <BreadCrumb />
        <Container className="programming-text-wrapper">
          <h1>Programming Resources</h1>
          <p className="resources-date">Last Updated: October 6th 2022 </p>
          <p>
            Here are some programming resources I&#39;ve complied for specific
            topics that I wish I knew about when I started. Will continuosly be
            adding more!
          </p>

          <Row xs={2} md={3} lg={4} className="g-4">
            <Col>
              <Card className="resources-card-text h-100">
                <Card.Header as="h5">Courses</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {courses.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">Datasets</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {datasets.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">Frontend</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {frontEnd.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">IDE</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {ide.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">Machine Learning</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {ml.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">UX/UI</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {uxui.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
                          </li>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-text h-100">
                <Card.Header as="h5">Web3</Card.Header>
                <Card.Body>
                  <div className="badge-bar">
                    <Row className="g-4">
                      <Col>
                        {web3.map((val, idx) => (
                          <li key={idx}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={val.link}
                              className="resources-btn"
                            >
                              {val.title}
                            </a>
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

export default ProgrammingResourcesView
