import React from "react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const iconStyle = (Icon) => <Icon />

export const footerSocialData = [
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
  },
  {
    name: "Github",
    icon: iconStyle(FaGithub),
  },
]
