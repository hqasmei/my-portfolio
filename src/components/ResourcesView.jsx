import React from "react"
import { Link } from "react-router-dom"

import { resourcesData } from "../data"

import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import "./ResourcesView.css"

const ResourcesView = () => (
  <>
    <div className="resources-section resources-darkBg">
      <Container>
        <h1>Resources</h1>
      </Container>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {resourcesData.map((val, idx) => (
            <Col key={idx}>
              <Card className="menu2-card-text h-100">
                <Card.Header as="h5">{val.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{val.description}</Card.Text>
                  <Link to={val.path}>
                    <Button variant="dark">{val.buttonText}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </>
)
export default ResourcesView
