import React from "react"

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
} from "./ProjectsStyles"

const Projects = () => {
  const initial = {
    y: 40,
    opacity: 0,
  }
  const animate = {
    y: 0,
    opacity: 1,
  }
  return (
    <Section margin="auto" padding={"40px 0"}>
      <Container>
        <ProjectsTextWrapper>
          <ProjectsTitle>My Projects</ProjectsTitle>
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

                {item.link !== "" ? (
                  <ProjectButton href={item.link} target="_blank">
                    See Project
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
