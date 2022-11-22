import React from "react"
import { Card } from "antd"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const BookCards = ({ items, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div style={{ paddingLeft: "10px" }}>
      <Row xs={1} md={5} className="g-4">
        {items.map((item, idx) => (
          <Col key={idx}>
            <Card
              bordered={false}
              style={{ width: 170 }}
            >
              <img
                src={item.volumeInfo.imageLinks.smallThumbnail}
                alt={item.volumeInfo.title}
              />
              <h6>{item.volumeInfo.title}</h6>
              <p>{item.volumeInfo.authors[0]}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )

export default BookCards
