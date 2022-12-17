import React from "react"
import styled from "styled-components"

import { projectsData } from "../data"

const Section = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
`
const Container = styled.div`
  margin: auto;
  flex-wrap: wrap;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 60px;
  justify-content: center;
`

const Card = styled.div`
  width: 275px;
  height: 350px;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`

const CardImage = styled.img`
  width: 10em;
`

const CardTitle = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin: 0;
`

const CardDescription = styled.p`
  color: ${(props) => props.theme.primary};
  text-align: left;
  margin: 0;
`

const CardButton = styled.a`
  color: white;
  background: #1c1c1c;
  padding: 0.4em 1.2em;
  border-radius: 0.5em;
  font-weight: bold;
  font-size: 1em;
  margin: 0;
  display: inline-block;
  text-decoration: none;

  &:hover {
    color: white;
    background: #424549;
    transition: 300ms;
  }
`

const Header = styled.p`
  margin: 0.5em 0;
  font-size: 3em;
  color: ${(props) => props.theme.primary};
`

const ProjectsSection = () => {
  return (
    <Section>
      <Container>
        <Header>Projects</Header>
        <CardGrid>
          {projectsData.map((val, idx) => (
            <Card key={idx}>
              <CardImage src={val.img} alt={idx} />
              <CardTitle>{val.title}</CardTitle>
              <CardDescription>{val.description}</CardDescription>
              <CardButton
                href={val.link}
                rel="noreferrer"
                target="_blank"
                className="menu-btn"
              >
                See Project
              </CardButton>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}

export default ProjectsSection
