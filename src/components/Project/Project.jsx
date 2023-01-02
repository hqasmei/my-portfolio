/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import BreadCrumb from "../BreadCrumb/BreadCrumb"
import { Section, Container } from "../../globalStyles"

import {
  TopWrapper,
  ProjectTitle,
  ProjectHeadline,
  ProjectButton,
  ProjectDescription,
  ProjectLink,
  Content,
  LeftContainer,
  RightContainer,
  VersionContainter,
  ProjectBadges,
  ProjectBadge,
  VideoPlayer,
} from "./ProjectStyles"

const Project = ({
  name,
  // projectId,
  version,
  // description,
  // image,
  // icon,
  link,
  tech,
  overview,
  demo,
}) => {
  return (
    <Section height="75vh" margin="auto" padding={"40px 0"}>
      <Container mb="1rem">
        <BreadCrumb />
      </Container>

      <Container>
        <TopWrapper>
          <VersionContainter>
            <ProjectTitle>{name}</ProjectTitle>
            <p>{version}</p>
          </VersionContainter>

          <ProjectButton>
            <ProjectLink href={link} target="_blank" rel="noreferrer">
              Visit Site
            </ProjectLink>
          </ProjectButton>
        </TopWrapper>

        <Content>
          <LeftContainer>
            <VideoPlayer autoPlay loop muted width="500px" height="300px">
              <source src={demo} type="video/mp4" />
            </VideoPlayer>
          </LeftContainer>

          <RightContainer>
            <ProjectHeadline>Overview</ProjectHeadline>
            <ProjectDescription>{overview}</ProjectDescription>

            <ProjectHeadline>Tech Stack</ProjectHeadline>
            <ProjectBadges>
              {tech.map((element, idx) => {
                return <ProjectBadge key={idx}>{element}</ProjectBadge>
              })}
            </ProjectBadges>
          </RightContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default Project
