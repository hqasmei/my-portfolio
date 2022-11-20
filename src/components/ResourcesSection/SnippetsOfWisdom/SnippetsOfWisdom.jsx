import React from "react"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import "./SnippetsOfWisdom.css"

const SnippetsOfWisdom = () => {
  return (
    <>
      <div className="snippets-of-wisdom-section snippets-of-wisdom-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Snippets Of Wisdom</h1>
        </Container>
      </div>
    </>
  )
}

export default SnippetsOfWisdom
