import React, { useState } from "react"
import styled from "styled-components"

import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from "react-icons/hi"

import { resourcesData } from "../data"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 150vh;
  background: white;
`

const Container = styled.div`
  padding: 1em 20em;
`

const CardContainer = styled.div`
  padding: 1em 0;
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-gap: 30px;
  justify-content: left;
`

const ResourcesSection = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    } else {
      setClicked(index)
    }
  }

  return (
    <Section>
      <Container>
        <h1>Resources</h1>

        <CardGrid>
          {resourcesData.map((val, idx) => (
            <>
              {clicked === idx ? (
                <Card
                  key={idx}
                  onClick={() => {
                    toggle(idx)
                  }}
                >
                  <CardGrid>
                    <CardContainer>
                      <h1>{val.title} </h1>
                      <span>
                        <HiOutlineArrowCircleUp size={30} />
                      </span>
                    </CardContainer>

                    <CardContainer>
                      <p>{val.data}</p>
                    </CardContainer>
                  </CardGrid>
                </Card>
              ) : (
                <Card
                  key={idx}
                  onClick={() => {
                    toggle(idx)
                  }}
                >
                  <h1>{val.title} </h1>
                  <span>
                    <HiOutlineArrowCircleDown size={30} />
                  </span>
                </Card>
              )}
            </>
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}

export default ResourcesSection
