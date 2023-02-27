"use client"
import React, { useEffect, useState } from "react"
import { SOCIALS } from "@/utils/data"
import { SOCIALS_DARK } from "@/utils/data"

interface SocialItem {
  link: string
  icon: JSX.Element
}

interface FooterProps {
  isDark: boolean
}

const Footer = (props: FooterProps) => {
  const [data, setData] = useState(SOCIALS)
  const { isDark } = props

  useEffect(() => {
    if (isDark) {
      setData(SOCIALS_DARK)
    } else {
      setData(SOCIALS)
    }
  }, [isDark])

  return (
    <footer>
      <div className="flex h-16 flex-col items-center justify-center">
        <ul className="flex flex-row items-center space-x-6">
          {data.map((item: SocialItem, idx: number) => {
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
