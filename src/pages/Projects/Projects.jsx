import React from "react"
import Container from "react-bootstrap/Container"
import { Menu } from "../../components/Menu/Menu"
import { items } from "./Data"
import "./Projects.css"

const Projects = () => {
  return (
    <>
      <div className="projects-section projects-darkBg">
        <Container>
          <h1>Projects</h1>
        </Container>
        <Menu menuItem={items} />
      </div>
    </>
  )
}
export default Projects
