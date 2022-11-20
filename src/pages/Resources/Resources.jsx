import React from "react"
import Container from "react-bootstrap/Container"
import { Menu2 } from "../../components/Menu2/Menu2"
import { items } from "./Data"
import "./Resources.css"

const Resources = () => (
  <>
    <div className="resources-section resources-darkBg">
      <Container>
        <h1>Resources</h1>
      </Container>
      <Menu2 menuItem={items} />
    </div>
  </>
)
export default Resources
