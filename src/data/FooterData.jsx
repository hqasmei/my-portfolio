import React from "react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const iconStyle = (Icon) => <Icon />

export const footerSocialData = [
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
    link: "https://twitter.com/hqasmei",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    link: "https://www.linkedin.com/in/hosnaqasmei/",
  },
  {
    name: "Github",
    icon: iconStyle(FaGithub),
    link: "https://github.com/hqasmei",
  },
]
