import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import "./Menu.css"

export const Menu = (props) => {
  const { menuItem } = props
  console.log(menuItem)
  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {menuItem.map((val, idx) => (
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
                        <Badge bg="secondary" key={idx}>
                          {i}
                        </Badge>
                      ))}
                    </Col>
                  </Row>
                </div>
                <Button variant="dark" href={val.link} target="_blank">
                  See Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
