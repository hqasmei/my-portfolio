"use client"
import { Fragment } from "react"

import Link from "next/link"
import Image from "next/image"

import { useTheme } from "next-themes"
import { Popover, Transition } from "@headlessui/react"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { usePathname } from "next/navigation"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const Navbar = () => {
  const scrollPosition = useScrollPosition()
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  return (
    <Popover
      className={classNames(
        scrollPosition > 0
          ? "bg-white shadow dark:bg-black"
          : "bg-white shadow-none dark:bg-black",
        "sticky top-0 z-50  transition-shadow "
      )}
    >
      <div className="mx-2 px-2 md:mx-10">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex flex-1 justify-start lg:w-0">
            <Link href="/">
              {currentTheme === "dark" ? (
                <Image src="/light-logo.png" alt="" width={35} height={35} />
              ) : (
                <Image src="/dark-logo.png" alt="" width={35} height={35} />
              )}
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                  ? "text-base font-bold text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-200"
                  : "text-base font-medium hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-300"
              }
              href="/about"
            >
              About
            </Link>

            <Link
              className={
                pathname == "/projects"
                  ? "text-base font-bold text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-200"
                  : "text-base font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-300"
              }
              href="/projects"
            >
              Projects
            </Link>

            <Link
              className={
                pathname == "/resources"
                  ? "text-base font-bold text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-200"
                  : "text-base font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-300"
              }
              href="/resources"
            >
              Resources
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {currentTheme === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
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
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            )}
          </div>
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                {currentTheme === "dark" ? (
                  <button onClick={() => setTheme("light")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => setTheme("dark")}>
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
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
