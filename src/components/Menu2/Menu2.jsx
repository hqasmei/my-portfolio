import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import "./Menu2.css"

export const Menu2 = (props) => {
  const { menuItem } = props
  console.log(menuItem)
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {menuItem.map((val, idx) => (
            <Col key={idx}>
              <Card className="menu2-card-text h-100">
                <Card.Header as="h5">{val.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{val.description}</Card.Text>
                  <Button variant="dark" href={val.path}>
                    See Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
