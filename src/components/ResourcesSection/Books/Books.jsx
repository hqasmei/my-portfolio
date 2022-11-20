import React from "react"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import "./Books.css"

const Books = () => {
  return (
    <>
      <div className="books-section books-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Books</h1>
        </Container>
      </div>
    </>
  )
}

export default Books
