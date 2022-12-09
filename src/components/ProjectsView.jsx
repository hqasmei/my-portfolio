import React from "react"

import { projectsData } from "../data"

import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"

import "./ProjectsView.css"

const ProjectsView = () => {
  return (
    <>
      <div className="projects-section projects-darkBg">
        <Container>
          <h1>Projects</h1>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projectsData.map((val, idx) => (
              <Col key={idx}>
                <Card className="card-text h-100">
                  <Card.Img variant="top" className="h-100" src={val.img} />
                  <Card.Header as="h5">{val.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{val.description}</Card.Text>
                    <div className="badge-bar">
                      <Row className="g-4">
                        <Col>
                          {val.tech.map((i, idx) => (
                            <>
                              <Badge bg="secondary" key={idx}>
                                {i}
                              </Badge>{" "}
                            </>
                          ))}
                        </Col>
                      </Row>
                    </div>
                    <a
                      href={val.link}
                      rel="noreferrer"
                      target="_blank"
                      className="menu-btn"
                    >
                      See Project
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}
export default ProjectsView
