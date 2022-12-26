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
} from "./ProjectStyles"

const Project = ({
  name,
  // projectId,
  // description,
  // image,
  // icon,
  link,
  // tech,
  overview,
  features,
  techDetails,
  // demo,
  conclusion,
}) => {
  return (
    <Section margin="auto" padding={"40px 0"}>
      <Container mb="1rem">
        <BreadCrumb />
      </Container>

      <Container>
        <TopWrapper>
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectButton>
            <ProjectLink href={link} target="_blank" rel="noreferrer">
              Try Out
            </ProjectLink>
          </ProjectButton>
        </TopWrapper>

        <Content>
          <div>
            <ProjectHeadline>Overview</ProjectHeadline>
            <ProjectDescription>{overview}</ProjectDescription>

            <ProjectHeadline>Features</ProjectHeadline>
            {features.map((feature, idx) => {
              return (
                <ProjectDescription key={idx}>
                  {idx + 1}. {feature}
                </ProjectDescription>
              )
            })}

            <ProjectHeadline>Technical Details</ProjectHeadline>
            <ProjectDescription>{techDetails}</ProjectDescription>

            {/* <ProjectHeadline>Demo</ProjectHeadline>
        <p>{demo}</p>
        <a href={link}>Link</a> */}

            <ProjectHeadline>Conclusion</ProjectHeadline>
            <ProjectDescription>{conclusion}</ProjectDescription>
          </div>

          <div></div>
        </Content>
      </Container>
    </Section>
  )
}

export default Project
