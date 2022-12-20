import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Section } from "../../globalStyles"
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./ContentStyles"

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

export const Content = ({
  topLine,
  headline,
  description,
  buttons,
  img,
  alt,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 }
  const animation = useAnimation()

  const { ref, inView } = useInView({ threshold: 0.2 })
  const navigate = useNavigate()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      })
    }
  }, [inView, animation])

  return (
    <Section padding={"90px 0"} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                {description}
              </Subtitle>

              {buttons.map((button, idx) => {
                return (
                  <ContentButton
                    initial={initial}
                    transition={{ delay: 1, duration: 0.6 }}
                    animate={animation}
                    onClick={() => {
                      navigate(button.path)
                    }}
                    key={idx}
                  >
                    {button.label}
                  </ContentButton>
                )
              })}
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  )
}
