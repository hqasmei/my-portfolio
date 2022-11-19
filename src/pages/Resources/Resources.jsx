import React from "react"
// import Container from "react-bootstrap/Container"
import { Menu2 } from "../../components/Menu2/Menu2"
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb"
import { items } from "./Data"
import "./Resources.css"

const Resources = () => (
  <>
    <div className="resources-section resources-darkBg">
      <BreadCrumb />
      <Menu2 menuItem={items} />
    </div>
  </>
)
export default Resources
