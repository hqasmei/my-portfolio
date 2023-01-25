"use client" // this is a client component

import React from "react"
import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full ">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between my-4">
          <a href="/">
            <div className="container flex items-center space-x-2">
              <Image src="/logo.png" alt="" width={35} height={35} />
              <h2 className="text-2xl md:text-4xl font-bold">Hosna Qasmei</h2>
            </div>
          </a>
        </div>
        <div>
          <div className="flex space-x-6 items-center justify-center ">
            <Link
              className={
                pathname == "/projects"
                  ? "font-bold"
                  : "text-neutral-900  hover:text-neutral-500"
              }
              href="/projects"
              onClick={() => setNavbar(!navbar)}
            >
              Projects
            </Link>
            <Link
              className={
                pathname == "/blog"
                  ? "font-bold"
                  : "text-neutral-900  hover:text-neutral-500"
              }
              href="/blog"
              onClick={() => setNavbar(!navbar)}
            >
              Blog
            </Link>
            <Link
              className={
                pathname == "/more"
                  ? "font-bold"
                  : "text-neutral-900  hover:text-neutral-500"
              }
              href="/more"
              onClick={() => setNavbar(!navbar)}
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
