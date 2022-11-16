import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={{ pathname: "https://twitter.com/hqasmei" }}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={{ pathname: "https://www.linkedin.com/in/hosnaqasmei/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="social-icon-link"
              to={{ pathname: "https://github.com/hqasmei" }}
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
          </div>
          <small className="website-rights">Hosna Qasmei © 2022</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
