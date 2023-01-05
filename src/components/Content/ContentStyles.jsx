import styled from "styled-components"
import { motion } from "framer-motion"

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;

  @media screen and (max-width: 842px) {
    flex-direction: column-reverse;
  }
`

export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 30px;
  padding-left: 30px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 842px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 842px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
`

export const TopLine = styled(motion.div)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 842px) {
    text-align: center;
  }
`

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`

export const Heading = styled(motion.h2)`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  line-height: 1.25;
  max-width: 440px;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 842px) {
    text-align: center;
  }
`

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 1.25;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryHue};
`

export const ContentButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  margin-right: 1em;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${(props) => props.theme.secondary};

  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${(props) => props.theme.secondary};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: ${(props) => props.theme.secondary};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 842px) {
    margin-right: 0;
    margin-bottom: 1em;
  }
`
