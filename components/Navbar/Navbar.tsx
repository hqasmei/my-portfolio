"use client"
import { Fragment } from "react"

import Link from "next/link"
import Image from "next/image"
import { SOCIALS_DARK } from "@/utils/data"
import { BsArrowRightShort } from "react-icons/bs"

import { Popover, Transition } from "@headlessui/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <Popover className="absolute  mx-auto w-full  sm:px-10">
      <Popover.Overlay className="fixed inset-0 backdrop-blur-sm" />
      <div className="mx-2 px-2 md:mx-10">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex flex-1 justify-start lg:w-0">
            <Link href="/">
              <Image
                src="/light-logo.png"
                alt=""
                width={55}
                height={55}
                className="rounded-md p-2 transition duration-300 hover:bg-neutral-800 hover:ease-in"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-100 hover:text-neutral-200 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-2 md:flex ">
            <Link
              className={
                pathname == "/projects"
                  ? "rounded-md py-2 px-3 text-sm font-bold text-neutral-50 transition duration-300 "
                  : "rounded-md py-2 px-3 text-sm text-neutral-400  transition duration-300  hover:text-neutral-50"
              }
              href="/projects"
            >
              Projects
            </Link>

            <Link
              className={
                pathname == "/resources"
                  ? "rounded-md py-2 px-3 text-sm font-bold text-neutral-50 transition duration-300 "
                  : "rounded-md py-2 px-3 text-sm text-neutral-400  transition duration-300  hover:text-neutral-50"
              }
              href="/resources"
            >
              Resources
            </Link>
            <Link
              className={
                pathname == "/about"
                  ? "rounded-md py-2 px-3 text-sm font-bold text-neutral-50 transition duration-300"
                  : "rounded-md py-2 px-3 text-sm text-neutral-400  transition duration-300  hover:text-neutral-50"
              }
              href="/about"
            >
              About
            </Link>
            <Link
              className={
                "rounded-md border border-neutral-400 py-2 px-3 text-sm text-neutral-400  transition duration-300 hover:border-neutral-50 hover:text-neutral-50"
              }
              href="/more"
            >
              <div className="flex flex-row items-center justify-center">
                <p>More</p> <BsArrowRightShort size={16} />
              </div>
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
          className="show absolute top-0 right-0  w-3/5 origin-top-right transform p-2 transition md:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <Image
                        src="/dark-logo.png"
                        alt=""
                        width={35}
                        height={35}
                      />
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
                        ? "text-base font-bold text-neutral-500 hover:text-neutral-600"
                        : "text-base text-neutral-500 hover:text-neutral-600"
                    }
                    href="/about"
                    onClick={() => close()}
                  >
                    About
                  </Link>
                  <Link
                    className={
                      pathname == "/projects"
                        ? "text-base font-bold text-neutral-500 hover:text-neutral-600"
                        : "text-base text-neutral-500 hover:text-neutral-600"
                    }
                    href="/projects"
                    onClick={() => close()}
                  >
                    Projects
                  </Link>
                  <Link
                    className={
                      pathname == "/resources"
                        ? "text-base font-bold text-neutral-500 hover:text-neutral-600"
                        : "text-base text-neutral-500 hover:text-neutral-600"
                    }
                    href="/resources"
                    onClick={() => close()}
                  >
                    Resources
                  </Link>
                  <Link
                    className={
                      "rounded-md border border-neutral-400 py-2 px-3 text-sm text-neutral-400  transition duration-300 hover:border-neutral-600 hover:text-neutral-600"
                    }
                    href="/more"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <p>More</p> <BsArrowRightShort size={16} />
                    </div>
                  </Link>
                  <div>
                    <ul className="flex flex-row items-center space-x-3">
                      {SOCIALS_DARK.map((item, idx) => {
                        return (
                          <li key={idx}>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.icon}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
