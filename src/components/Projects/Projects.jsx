import React from "react"

import { useNavigate, useLocation } from "react-router-dom"

import { projectsData } from "../../data/ProjectsData"

// import ButtonBar from "../ButtonBar/ButtonBar"

import { Section, Container } from "../../globalStyles"
import {
  ProjectsTitle,
  ProjectsTextWrapper,
  ProjectsWrapper,
  ProjectCard,
  ProjectCardHeaderWrapper,
  ProjectCardTextWrapper,
  ProjectName,
  ProjectImage,
  ProjectButton,
  ProjectCardIcon,
  ProjectCardIconImage,
  ProjectBadges,
  ProjectBadge,
} from "./ProjectsStyles"

const Projects = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const routeChange = (id) => {
    navigate(`${location.pathname}/${id}`)
  }

  const initial = {
    y: 40,
    opacity: 0,
  }
  const animate = {
    y: 0,
    opacity: 1,
  }
  return (
    <Section height="75vh" margin="auto" padding={"40px 0"}>
      <Container>
        <ProjectsTextWrapper>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTextWrapper>

        {/* <ButtonBar /> */}

        <ProjectsWrapper>
          {projectsData.map((item, idx) => (
            <ProjectCard
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + idx * 0.1 }}
              key={idx}
            >
              <ProjectCardHeaderWrapper>
                <ProjectImage src={item.image} alt={idx} />
                <ProjectCardIcon>
                  <ProjectCardIconImage src={item.icon} alt={idx} />
                </ProjectCardIcon>
              </ProjectCardHeaderWrapper>

              <ProjectCardTextWrapper>
                <ProjectName>{item.name}</ProjectName>

                <ProjectBadges>
                  {item.tech.map((element, idx) => {
                    return <ProjectBadge key={idx}>{element}</ProjectBadge>
                  })}
                </ProjectBadges>

                {item.link !== "" ? (
                  <ProjectButton
                    onClick={() => {
                      routeChange(item.projectId)
                    }}
                  >
                    Learn More
                  </ProjectButton>
                ) : (
                  <></>
                )}
              </ProjectCardTextWrapper>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </Container>
    </Section>
  )
}

export default Projects
