import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
// import { bookList } from "./Data"
import "./Books.css"

const Books = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await Promise.all([
      fetch(
        "https://www.googleapis.com/books/v1/users/110829396493238639516/bookshelves/4/volumes?startIndex=0&maxResults=40"
      ),
      fetch(
        "https://www.googleapis.com/books/v1/users/110829396493238639516/bookshelves/4/volumes?startIndex=40&maxResults=40"
      ),
    ])
      .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json()
          })
        )
      })
      .then(function (collectedData) {
        // Log the data to the console
        // You would do something with both sets of data here

        collectedData.forEach(function (d) {
          d.items.forEach((i) => {
            setData((data) => [...data, i])
            console.log(i)
          })
        })
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error)
      })
  }
  // this.rawRequests.push(...response.data)
  // .then((responses) => {
  //         responses.forEach((response) => console.log(response))
  //       })
  return (
    <>
      <div className="books-section books-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Books I&#39;ve Read</h1>
          <p>
            Here is a list of 90+ books that I have read that can be filtered by
            subject.
          </p>
          <Row xs={2} md={3} lg={4} className="g-4">
            {data.map((val, idx) => (
              <Col key={idx}>
                <Card key={val.id} className="card-text">
                  <Card.Img
                    variant="top"
                    src={val.volumeInfo.imageLinks.smallThumbnail}
                  />
                  <Card.Header>{val.volumeInfo.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{val.volumeInfo.authors[0]}</Card.Text>
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

export default Books
