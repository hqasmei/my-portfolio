// import React, { useState } from "react"
import React from "react"
import Container from "react-bootstrap/Container"
// import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup"
import { Menu } from "../../components/Menu/Menu"
import { items } from "./Data"
import "./Projects.css"

// const allCategories = ["All", ...new Set(items.map((item) => item.category))]

const Projects = () => {
  // const [menuItem, setMenuItem] = useState(items)
  // const [buttons, setButtons] = useState(allCategories)

  //Filter Function
  // const filter = (button) => {
  //   if (button === "All") {
  //     setMenuItem(items)
  //     return
  //   }

  //   const filteredData = items.filter((item) => item.category === button)
  //   setMenuItem(filteredData)
  //   setButtons
  // }

  return (
    <>
      <div className="outer-container home-section darkBg">
        <Container>
          <h1>Projects</h1>
          {/* <ButtonGroup button={buttons} filter={filter} /> */}
        </Container>
        <Container>
          <Menu menuItem={items} />
        </Container>
      </div>
    </>
  )
}
export default Projects
