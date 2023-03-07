import React from "react"
import { SOCIALS } from "@/utils/data"

interface SocialItem {
  link: string
  icon: JSX.Element
}

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6">
      <div className="flex h-16 flex-col items-center justify-center">
        <ul className="flex flex-row items-center space-x-6">
          {SOCIALS.map((item: SocialItem, idx: number) => {
            return (
              <li key={idx}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
