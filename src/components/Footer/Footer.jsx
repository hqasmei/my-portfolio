import React from "react"
import { FaTwitter, FaLinkedin, FaGithub, } from "react-icons/fa"
import { SiHashnode, SiCodepen } from "react-icons/si"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <div className="social-icons">
          <a
            className="social-icon-link"
            href="https://github.com/hqasmei"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon-link"
            href="https://twitter.com/hqasmei"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            className="social-icon-link"
            href="https://www.linkedin.com/in/hosnaqasmei/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-icon-link"
            href="https://www.hashnode.com/@hqasmei/"
            target="_blank"
            rel="noreferrer"
            aria-label="Hashnode"
          >
            <SiHashnode />
          </a>
          <a
            className="social-icon-link"
            href="https://www.codepen.io/hqasmei/"
            target="_blank"
            rel="noreferrer"
            aria-label="CodePen"
          >
            <SiCodepen />
          </a>
        </div>
        <small className="website-rights">Hosna Qasmei © 2022</small>
      </div>
    </div>
  )
}

export default Footer
