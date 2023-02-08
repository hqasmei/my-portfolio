import React from "react"
import { SOCIALS } from "@/data"

const Footer = () => {
  return (
    <footer>
      <div className="flex h-16 flex-col items-center justify-center md:hidden">
        <ul className="flex flex-row items-center space-x-6">
          {SOCIALS.map((item, idx) => {
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
