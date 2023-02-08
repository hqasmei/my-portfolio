import React from "react"
import { SOCIALS } from "@/data"

const Social = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:z-10 md:block md:w-32 ">
      <ul className=" flex flex-col items-center space-y-6 after:mt-8 after:block after:h-28 after:w-0.5 after:bg-white">
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
  )
}

export default Social
