import React from "react"
import styled from "styled-components"

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  text-align: center;
  width: 80%;
  margin-left: 2em;
`

const SocialIcon = styled.a`
  padding: 0.5em;
`

const WebsiteRights = styled.p`
  font-size: 1.25em;
  margin: 0.5em;
  color: ${(props) => props.theme.primary};
`

const Footer = (props) => {
  const { theme } = props

  const socialIconColor = theme === "light" ? "black" : "white"

  return (
    <Section>
      <Container>
        <SocialIcon
          href="https://github.com/hqasmei"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub size={30} color={socialIconColor} />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com/hqasmei"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={30} color={socialIconColor} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/hosnaqasmei/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} color={socialIconColor} />
        </SocialIcon>
        <WebsiteRights>Hosna Qasmei © 2022</WebsiteRights>
      </Container>
    </Section>
  )
}

export default Footer
