import styled from "styled-components"
import { motion } from "framer-motion"

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 842px) {
    overflow-x: auto
    white-space: nowrap;
  }
`

export const Button = styled(motion.button)`
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
    transform: translate(-50%, -50%) rotate(180deg);
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
