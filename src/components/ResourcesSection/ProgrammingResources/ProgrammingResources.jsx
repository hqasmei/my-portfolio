import React from "react"
import { Container } from "react-bootstrap"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import { courses, datasets, frontEnd, ide, ml, uxui, web3 } from "./Data"
import "./ProgrammingResources.css"

const ProgrammingResources = () => {
  return (
    <>
      <div className="programming-resources-section programming-resources-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Programming Resources</h1>
          <p>
            Last Updated: October 6th, 2022 <br />
            Here are some programming resources I&#39;ve complied for specific
            topics that I wish I knew about when I started. Will continuosly be
            adding more!
          </p>

          <h3>Courses</h3>
          {courses.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>Datasets</h3>
          {datasets.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>Frontend/Libraries/Frameworks</h3>
          {frontEnd.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>IDE</h3>
          {ide.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>Machine Learning</h3>
          {ml.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>UX/UI</h3>
          {uxui.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}

          <h3>Web3</h3>
          {web3.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
            </li>
          ))}
        </Container>
      </div>
    </>
  )
}

export default ProgrammingResources
