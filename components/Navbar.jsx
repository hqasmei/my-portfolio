"use client"
import { Fragment } from "react"

import Link from "next/link"
import Image from "next/image"

import { Popover, Transition } from "@headlessui/react"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <Popover className="absolute  mx-auto w-full px-2 sm:px-20">
      <div className="mx-2 px-2 md:mx-10">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex flex-1 justify-start lg:w-0">
            <Link href="/">
              <Image src="/light-logo.png" alt="" width={35} height={35} />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-100 hover:text-neutral-200 focus:outline-none   ">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link
              className={
                pathname == "/about"
                  ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                  : "text-base font-semibold text-neutral-100 hover:text-neutral-300"
              }
              href="/about"
            >
              About
            </Link>

            <Link
              className={
                pathname == "/projects"
                  ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                  : "text-base font-medium text-neutral-100 hover:text-neutral-300"
              }
              href="/projects"
            >
              Projects
            </Link>

            <Link
              className={
                pathname == "/resources"
                  ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                  : "text-base font-medium text-neutral-100 hover:text-neutral-300"
              }
              href="/resources"
            >
              Resources
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Image src="/dark-logo.png" alt="" width={35} height={35} />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <Link
                  className={
                    pathname == "/about"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                      : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                  }
                  href="/about"
                >
                  
                  About
                </Link>

                <Link
                  className={
                    pathname == "/projects"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                      : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                  }
                  href="/projects"
                >
                  Projects
                </Link>

                <Link
                  className={
                    pathname == "/resources"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                      : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                  }
                  href="/resources"
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
