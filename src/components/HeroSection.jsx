import React from "react"
import { devices } from "../constants"
import styled, { keyframes } from "styled-components"

const animateText = keyframes`
   0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.pageBackground};

  @media ${devices.mobileM} {
    height: 75vh;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    height: 75vh;
    padding: 0 5em;
  }
`
const ContentContainer = styled.div`
  text-align: center;

  @media ${devices.laptop} {
    text-align: left;
  }

  @media ${devices.laptop} {
    padding: 1em;
  }
`

const ImageContainer = styled.div`
  margin: 0;
`

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin: 0;
  animation-name: ${animateText};
  animation-duration: 2s;
  animation-timing-function: ease-out;

  @media ${devices.mobileM} {
    font-size: 2.25em;
  }

  @media ${devices.mobileL} {
    font-size: 2.5em;
  }

  @media ${devices.tablet} {
    font-size: 3.5em;
  }

  @media ${devices.laptop} {
    font-size: 4em;
  }

  @media ${devices.laptopL} {
  }
`

const Headline = styled.p`
  font-size: 1.25em;
  letter-spacing: 0.025em;
  margin: 0.25em 1.5em;
  color: ${(props) => props.theme.primary};
  animation-name: ${animateText};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 200ms;
  animation-fill-mode: backwards;

  @media ${devices.mobileM} {
    font-size: 1.45em;
  }

  @media ${devices.mobileL} {
    font-size: 1.65em;
  }

  @media ${devices.tablet} {
    font-size: 2em;
  }

  @media ${devices.laptop} {
    margin: 0.25em 2em 0 0;
  }

  @media ${devices.laptopL} {
    margin: 0;
  }
`

const Subtitle = styled.p`
  font-size: 1em;
  line-height: 1.35em;
  color: ${(props) => props.theme.primary};
  margin: 0.5em 2em 1em;
  animation-name: ${animateText};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 400ms;
  animation-fill-mode: backwards;

  @media ${devices.mobileM} {
    font-size: 1.125em;
  }

  @media ${devices.mobileL} {
    font-size: 1.25em;
  }

  @media ${devices.tablet} {
    font-size: 1.5em;
  }

  @media ${devices.laptop} {
    margin: 0.25em 2em 0.5em 0em;
  }

  @media ${devices.laptopL} {
  }
`

const ButtonGroup = styled.div`
  justify-content: space-between;
  animation-name: ${animateText};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 600ms;
  animation-fill-mode: backwards;

  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${devices.laptop} {
    justify-content: left;
    margin: 0;
  }
`

const ButtonFilled = styled.a`
  display: block;
  padding: 0.7em;
  margin: 1em;
  white-space: nowrap;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  transition: all 0.5s ease;

  @media ${devices.tablet} {
    margin-right: 1em;
  }

  @media ${devices.laptop} {
    margin: 1em 0em;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primaryHue};
  }
`

const ButtonOutlined = styled.a`
  display: block;
  padding: 0.7em;

  margin: 1em;
  white-space: nowrap;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  background: linear-gradient(
        ${(props) => props.theme.secondary},
        ${(props) => props.theme.secondary}
      )
      padding-box,
    ${(props) => props.theme.colorGradient} border-box;

  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  transition: all 0.5s ease;
  &:hover {
    color: ${(props) => props.theme.secondary};
    background: ${(props) => props.theme.colorGradient} border-box;
  }

  @media ${devices.tablet} {
    margin-bottom: 1em;
  }
`

const PersonalImage = styled.img`
  width: 200px;

  @media ${devices.laptop} {
    width: 80%;
    position: relative;
  }
`

const BackgroundSquare = styled.div`
  @media ${devices.laptop} {
    background-color: black;
    top: 190px;
    left: 170px;
    transform: rotate(-15deg);
    width: 27%;
    height: 57%;
    position: absolute;
    z-index: -1;
  }
`



const HeroSection = () => {
  return (
    <Section>
      <ImageContainer>
        <PersonalImage src="images/headshot.png" alt="headshot" />
        <BackgroundSquare></BackgroundSquare>
      </ImageContainer>

      <ContentContainer>
        <Title>
          Hi, I&#39;m Hosna
        </Title>
        <Headline>Software Engineer and Aspiring Entrepreneur</Headline>
        <Subtitle>
          Working towards creating software that makes life easier and more
          meaningful
        </Subtitle>
        <ButtonGroup>
          <ButtonFilled href="/">My Story</ButtonFilled>
          <ButtonOutlined href="/">My Experience</ButtonOutlined>
        </ButtonGroup>
      </ContentContainer>
    </Section>
  )
}

export default HeroSection
