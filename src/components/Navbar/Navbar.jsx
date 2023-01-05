import React from "react"

import * as constants from "../../constants"

import { BsSun, BsMoon } from "react-icons/bs"

import { Toggle, Nav, LogoLink, Logo } from "./NavbarStyles"

const Navbar = (props) => {
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
      <Logo src="./assets/images/dark-logo.png" alt="dark-logo" />
    ) : (
      <Logo src="./assets/images/light-logo.png" alt="light-logo" />
    )

  return (
    <Nav>
      <LogoLink href={constants.ROUTE_HOME} className="logo">
        {logoImg}
      </LogoLink>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Nav>
  )
}

export default Navbar
