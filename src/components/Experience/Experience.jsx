import React from "react"
import { Section, Container } from "../../globalStyles"

import {
  TopLine,
  SubLine,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceCardIcon,
  ExperienceCardIconImage,
  ExperienceCardHeaderWrapper,
  ExperienceCardInfo,
  Wrapper,
  Role,
  Org,
  Period,
  Grid,
  
} from "./ExperienceStyles"

import {
  experienceData,
  educationData,
  skillsData,
  volunteeringData,
} from "../../data/ExperienceData"

const languages = skillsData.filter((obj) => {
  return obj.section === "Programming Languages"
})

const libraries = skillsData.filter((obj) => {
  return obj.section === "Libraries & Frameworks"
})

const tools = skillsData.filter((obj) => {
  return obj.section === "Tools & Platforms"
})

const design = skillsData.filter((obj) => {
  return obj.section === "Design"
})

const Experience = () => {
  const initial = {
    y: 40,
    opacity: 0,
  }
  const animate = {
    y: 0,
    opacity: 1,
  }
  return (
    <>
      <Section padding="60px 0" position="relative" inverse id="about">
        <Container>
          <TopLine>Relevant Experience</TopLine>
          <ExperienceWrapper>
            {experienceData.map((item, idx) => {
              return (
                <ExperienceCard
                  key={idx}
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 0.5 + idx * 0.1 }}
                >
                  <ExperienceCardHeaderWrapper>
                    <ExperienceCardInfo>
                      <Role>{item.role}</Role>
                      <Org>{item.organization}</Org>
                      <Period>{item.period}</Period>
                    </ExperienceCardInfo>
                    <ExperienceCardIcon>
                      <ExperienceCardIconImage src={item.image} alt={idx} />
                    </ExperienceCardIcon>
                  </ExperienceCardHeaderWrapper>
                </ExperienceCard>
              )
            })}
          </ExperienceWrapper>
        </Container>
      </Section>

      <Section padding="60px 0" position="relative" inverse id="about">
        <Container>
          <TopLine>Education</TopLine>
          <ExperienceWrapper>
            {educationData.map((item, idx) => {
              return (
                <ExperienceCard
                  key={idx}
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 0.5 + idx * 0.1 }}
                >
                  <ExperienceCardHeaderWrapper>
                    <ExperienceCardInfo>
                      <Role>{item.school}</Role>
                      <Org>{item.received}</Org>
                      <Period>{item.period}</Period>
                    </ExperienceCardInfo>
                    <ExperienceCardIcon>
                      <ExperienceCardIconImage src={item.image} alt={idx} />
                    </ExperienceCardIcon>
                  </ExperienceCardHeaderWrapper>
                </ExperienceCard>
              )
            })}
          </ExperienceWrapper>
        </Container>
      </Section>

      <Section padding="60px 0" position="relative" inverse id="about">
        <Container>
          <TopLine>Skills</TopLine>

          <Wrapper>
            <SubLine>Programming Languages</SubLine>

            <Grid>
              {languages.map((item, idx) => {
                return (
                  <ExperienceCard
                    key={idx}
                    initial={initial}
                    animate={animate}
                    transition={{ duration: 0.5 + idx * 0.1 }}
                  >
                    <ExperienceCardHeaderWrapper>
                      <ExperienceCardInfo>
                        <Role>{item.skill}</Role>
                        <Period>{item.level}</Period>
                      </ExperienceCardInfo>
                      <ExperienceCardIcon>{item.image}</ExperienceCardIcon>
                    </ExperienceCardHeaderWrapper>
                  </ExperienceCard>
                )
              })}
            </Grid>
          </Wrapper>

          <Wrapper>
            <SubLine>Libraries & Frameworks</SubLine>
            <Grid>
              {libraries.map((item, idx) => {
                return (
                  <ExperienceCard
                    key={idx}
                    initial={initial}
                    animate={animate}
                    transition={{ duration: 0.5 + idx * 0.1 }}
                  >
                    <ExperienceCardHeaderWrapper>
                      <ExperienceCardInfo>
                        <Role>{item.skill}</Role>
                        <Period>{item.level}</Period>
                      </ExperienceCardInfo>
                      <ExperienceCardIcon>{item.image}</ExperienceCardIcon>
                    </ExperienceCardHeaderWrapper>
                  </ExperienceCard>
                )
              })}
            </Grid>
          </Wrapper>
          <Wrapper>
            <SubLine>Tools & Platforms</SubLine>
            <Grid>
              {tools.map((item, idx) => {
                return (
                  <ExperienceCard
                    key={idx}
                    initial={initial}
                    animate={animate}
                    transition={{ duration: 0.5 + idx * 0.1 }}
                  >
                    <ExperienceCardHeaderWrapper>
                      <ExperienceCardInfo>
                        <Role>{item.skill}</Role>
                        <Period>{item.level}</Period>
                      </ExperienceCardInfo>
                      <ExperienceCardIcon>{item.image}</ExperienceCardIcon>
                    </ExperienceCardHeaderWrapper>
                  </ExperienceCard>
                )
              })}
            </Grid>
          </Wrapper>
          <Wrapper>
            {" "}
            <SubLine>Design</SubLine>
            <Grid>
              {design.map((item, idx) => {
                return (
                  <ExperienceCard
                    key={idx}
                    initial={initial}
                    animate={animate}
                    transition={{ duration: 0.5 + idx * 0.1 }}
                  >
                    <ExperienceCardHeaderWrapper>
                      <ExperienceCardInfo>
                        <Role>{item.skill}</Role>
                        <Period>{item.level}</Period>
                      </ExperienceCardInfo>
                      <ExperienceCardIcon>{item.image}</ExperienceCardIcon>
                    </ExperienceCardHeaderWrapper>
                  </ExperienceCard>
                )
              })}
            </Grid>
          </Wrapper>
        </Container>
      </Section>

      <Section padding="60px 0" position="relative" inverse id="about">
        <Container>
          <TopLine>Volunteering</TopLine>
          <ExperienceWrapper>
            {volunteeringData.map((item, idx) => {
              return (
                <ExperienceCard
                  key={idx}
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 0.5 + idx * 0.1 }}
                >
                  <ExperienceCardHeaderWrapper>
                    <ExperienceCardInfo>
                      <Role>{item.role}</Role>
                      <Org>{item.organization}</Org>
                      <Period>{item.period}</Period>
                    </ExperienceCardInfo>
                    <ExperienceCardIcon>
                      <ExperienceCardIconImage src={item.image} alt={idx} />
                    </ExperienceCardIcon>
                  </ExperienceCardHeaderWrapper>
                </ExperienceCard>
              )
            })}
          </ExperienceWrapper>
        </Container>
      </Section>
    </>
  )
}

export default Experience
