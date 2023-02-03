import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center h-16 md:hidden">
        <ul className="flex flex-row items-center space-x-6">
          <li>
            <a href="/">
              <AiOutlineGithub
                className="cursor-pointer transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineTwitter
                className="cursor-pointer transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineLinkedin
                className="cursor-pointer transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineYoutube
                className="cursor-pointer transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
