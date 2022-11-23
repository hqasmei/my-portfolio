import React, { useState, useEffect } from "react"
import { Layout } from "antd"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import BookCards from "../../BookCards/BookCards"
import { Pagination } from "antd"
import "./Books.css"

const { Content } = Layout

const Books = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      loadData()
      setLoading(false)
    }

    fetchItems()
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
            setPosts((oldArray) => [...oldArray, i])
          })
        })
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error)
      })
  }

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber)

  const totalPosts = posts.length

  return (
    <>
      <div className="books-section books-darkBg">
        <BreadCrumb />
        <Container className="books-text-wrapper">
          <h1>Books I&#39;ve Read</h1>
          <p>
            Here is a list of 90+ books that I have read that can be filtered by
            subject.
          </p>
          <Layout className="layout">
            <Content
              style={{
                padding: "25px 50px",
              }}
            >
              <BookCards items={currentPosts} loading={loading} />
              <Pagination
                showSizeChanger={false}
                style={{ paddingTop: "20px" }}
                onChange={handleChangePage}
                current={currentPage}
                total={totalPosts}
                pageSize={postsPerPage}
              />
            </Content>
          </Layout>
        </Container>
      </div>
    </>
  )
}

export default Books
