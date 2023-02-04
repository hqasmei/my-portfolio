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
      <div className="flex h-16 flex-col items-center justify-center md:hidden">
        <ul className="flex flex-row items-center space-x-6">
          <li>
            <a href="https://github.com/hqasmei" target="_blank">
              <AiOutlineGithub
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1 "
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hqasmei" target="_blank">
              <AiOutlineTwitter
                className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hosnaqasmei/" target="_blank">
              <AiOutlineLinkedin
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
              target="_blank"
            >
              <AiOutlineYoutube
                className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
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
