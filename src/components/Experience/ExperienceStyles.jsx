import styled from "styled-components"
import { motion } from "framer-motion"

export const TopLine = styled(motion.div)`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 842px) {
    text-align: center;
  }
`
export const SubLine = styled(motion.div)`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 842px) {
    text-align: center;
  }
`
export const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1275px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 1275px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const Wrapper = styled.div`
  margin-top: 1rem;
`

export const ExperienceCard = styled(motion.div)`
  display: flex;
  flex-flow: column;
  background: #f3f3f3;
  // box-shadow: 0 0 32px 8px #d0d0d0;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 5px;
`

export const ExperienceCardHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? height : "105px")};

  @media screen and (max-width: 490px) {
    height: ${({ height }) => (height ? height : "110px")};
  }

  @media screen and (max-width: 390px) {
    height: 150px;
  }
`

export const ExperienceCardIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 1.25rem;
  width: 60px;
  height: 60px;
`
export const ExperienceCardIconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: fill;
  vertical-align: middle;
`

export const ExperienceCardInfo = styled.div`
  position: absolute;
  margin: 1rem;
  left: 5rem;
  top: 0.125rem;
`

export const ExperienceCardTextWrapper = styled.div`
  width: 100%;
  height: 170px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`

export const Role = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.secondary};
`

export const Org = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.secondary};
`

export const Period = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.primaryHue};
`

export const Location = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.secondary};
`

export const SmallBox = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  align-items: baseline;
  justify-content: space-between;
`
