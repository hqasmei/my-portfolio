import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0.125rem;
  color: ${(props) => props.theme.secondary};
`

export const ProjectsTextWrapper = styled.div`
  position: relative;
`

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media screen and (max-width: 548px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const ProjectCard = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  // box-shadow: 0 0 32px 8px #d0d0d0;
  border: 2px solid ${(props) => props.theme.primaryHue};
  border-radius: 5px;
`

export const ProjectName = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 0.25rem;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: fill;
  vertical-align: middle;
`

export const ProjectCardTextWrapper = styled.div`
  width: 100%;
  height: 170px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  color: ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
`

export const ProjectCardHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

export const ProjectCardIcon = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: -10px;
  width: 60px;
  height: 60px;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 15px;
`
export const ProjectCardIconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 11px;
  object-fit: cover;
  vertical-align: middle;
`

export const ProjectButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};

  border-radius: 7px;
  white-space: nowrap;
  outline: none;
  border: 2px solid ${(props) => props.theme.primary};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => props.theme.primaryHue};
    border: 2px solid ${(props) => props.theme.primaryHue};
  }
`

