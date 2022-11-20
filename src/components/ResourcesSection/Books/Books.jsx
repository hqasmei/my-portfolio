import React from "react"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import { bookList } from "./Data"
import "./Books.css"

const Books = () => {
  return (
    <>
      <div className="books-section books-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Books I&#39;ve Read</h1>
          <p>
            Here is a list of 89+ books that I have read that can be filtered by
            subject.
          </p>

          {bookList.map((val, idx) => (
            <li key={idx}>
              <strong>{val.title}</strong>{""} {val.authors}
            </li>
          ))}
        </Container>
      </div>
    </>
  )
}

export default Books
