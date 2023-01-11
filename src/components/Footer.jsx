import React from "react"
import {
  AiOutlineHeart,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai"

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto p-4 flex flex-col   text-center text-neutral-900 ">
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
            <AiOutlineGithub size={30} />
          </a>
          <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/hosnaqasmei/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-1">
          <span>Designed with</span>
          <span>
            <AiOutlineHeart color="red" />
          </span>
          <span>by Hosna Qasmei</span>
        </div>
      </div>
    </footer>
  )
}
