import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const BookCards = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <div>
        <Row xs={2} md={3} lg={4} className="g-4">
          {data.map((val, idx) => (
            <Col key={idx}>
              <img
                src={val.volumeInfo.imageLinks.smallThumbnail}
                alt={val.volumeInfo.title}
              />
              <h6>{val.volumeInfo.title}</h6>
              <p>{val.volumeInfo.authors[0]}</p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default BookCards
