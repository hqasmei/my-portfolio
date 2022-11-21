import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Layout, Pagination } from "antd"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import "./Books.css"

const { Content } = Layout

const Books = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState()
  const [page, setPage] = useState(0)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    loadData()
    setTotal(75)
  }, [])

  const indexOfLastPage = page + postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage)

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize)
  }

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
          })
        })

        
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error)
      })
  }
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
          <Layout className="layout">
            <Content
              style={{
                padding: "0 50px",
              }}
            >
              <div className="site-layout-content">
                <Row xs={2} md={3} lg={4} className="g-4">
                  {currentData.map((val, idx) => (
                    <Col key={idx}>
                      <Card key={idx} className="card-text">
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
                <Pagination
                  onChange={(value) => setPage(value)}
                  pageSize={postPerPage}
                  total={total}
                  current={page}
                  onShowSizeChange={onShowSizeChange}
                />
              </div>
            </Content>
          </Layout>
        </Container>
      </div>
    </>
  )
}

export default Books
