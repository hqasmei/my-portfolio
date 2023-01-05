import styled from "styled-components"

export const Toggle = styled.button`
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: ${(props) => props.theme.secondary};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.5s ease;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  position: sticky;
  top: 0px;
  z-index: 100;
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const LogoLink = styled.a``
