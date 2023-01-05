import React from "react"
import { useParams } from "react-router-dom"

import { projectsData } from "../data/ProjectsData"

import Project from "../components/Project/Project"

const MyProject = () => {
  const params = useParams()
  const projectId = params.projectId

  const project = projectsData.find((obj) => {
    return obj.projectId === projectId
  })

  return (
    <>
      <Project {...project} />
    </>
  )
}

export default MyProject
