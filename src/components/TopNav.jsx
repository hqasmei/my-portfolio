import React from "react"
import styled from "styled-components"

import { BsSun, BsMoon } from "react-icons/bs"

const Toggle = styled.button`
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: ${(props) => props.theme.primary};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  position: sticky;
  top: 0px;
  overflow: hidden;
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const TopNav = (props) => {
  const { theme, setTheme } = props

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const icon = theme === "light" ? <BsMoon size={30} /> : <BsSun size={30} />
  const logoImg =
    theme === "light" ? (
      <Logo src="images/dark-logo.png" alt="dark-logo" />
    ) : (
      <Logo src="images/light-logo.png" alt="light-logo" />
    )

  return (
    <>
      <Navbar>
        <a href="/" className="logo">
          {logoImg}
        </a>

        <div className="switch">
          <Toggle onClick={changeTheme}>{icon}</Toggle>
        </div>
      </Navbar>
    </>
  )
}

export default TopNav
