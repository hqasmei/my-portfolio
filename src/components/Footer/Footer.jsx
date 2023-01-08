import React from "react"
import {
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterColumn,
} from "./FooterStyles"
import { footerSocialData } from "../../data/FooterData"
import { Row, Section } from "../../globalStyles"

function Footer() {
  return (
    <Section padding="4rem 0 1rem 0">
      <FooterWrapper>
        <FooterRights>
          <FooterColumn id="footerLogo">
            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href={social.link}
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          Hosna Qasmei © 2023
        </FooterRights>
      </FooterWrapper>
    </Section>
  )
}

export default Footer
