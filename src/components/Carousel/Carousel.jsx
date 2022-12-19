import React, { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { IconContext } from "react-icons"
import { data, sliderSettings } from "../../data/CarouselData"
import { Row, Section, TextWrapper } from "../../globalStyles"
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
  Heading,
} from "./CarouselStyles"

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <Section margin="auto" padding="50px 70px">
      <Row justify="center" margin="1rem" wrap="wrap">
        <Heading width="auto">Projects</Heading>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>

      <Row justify="center" margin="1rem" wrap="wrap">
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>
    </Section>
  )
}

export default Carousel
