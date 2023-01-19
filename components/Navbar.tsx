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
      <div className="justify-between lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <div className="container flex items-center space-x-2">
                <Image src="/logo.png" alt="" width={35} height={35} />
                <h2 className="text-2xl font-bold">Hosna Qasmei</h2>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Link
                className={
                  pathname == "/"
                    ? "block text-right mr-4 lg:inline-block font-bold"
                    : "block text-right mr-4 lg:inline-block lg:mt-0 text-neutral-900  hover:text-neutral-500"
                }
                href="/"
                onClick={() => setNavbar(!navbar)}
              >
                Home
              </Link>
              <Link
                className={
                  pathname == "/experience"
                    ? "block text-right mr-4 font-bold"
                    : "block text-right mr-4 lg:inline-block lg:mt-0 text-neutral-900  hover:text-neutral-500"
                }
                href="/experience"
                onClick={() => setNavbar(!navbar)}
              >
                Experience
              </Link>
              <Link
                className={
                  pathname == "/projects"
                    ? "block text-right mr-4 lg:inline-block font-bold"
                    : "block text-right mr-4 lg:inline-block lg:mt-0 text-neutral-900  hover:text-neutral-500"
                }
                href="/projects"
                onClick={() => setNavbar(!navbar)}
              >
                Projects
              </Link>
              <Link
                className={
                  pathname == "/blog"
                    ? "block text-right mr-4 lg:inline-block font-bold"
                    : "block text-right mr-4 lg:inline-block lg:mt-0 text-neutral-900  hover:text-neutral-500"
                }
                href="/blog"
                onClick={() => setNavbar(!navbar)}
              >
                Blog
              </Link>
              <Link
                className={
                  pathname == "/about"
                    ? "block text-right mr-4 lg:inline-block font-bold"
                    : "block text-right mr-4 lg:inline-block lg:mt-0 text-neutral-900  hover:text-neutral-500"
                }
                href="/about"
                onClick={() => setNavbar(!navbar)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
