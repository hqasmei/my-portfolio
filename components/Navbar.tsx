"use client";
import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";

import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <Popover className="absolute  w-full">
      <Popover.Overlay className="fixed inset-0 backdrop-blur-sm" />

      <div className="mx-auto my-4 flex max-w-3xl items-center justify-between px-6 md:px-0">
        <div className="flex flex-1 justify-start lg:w-0">
          <Link href="/">
            <Image
              src="/light-logo.png"
              alt=""
              width={60}
              height={55}
              className="00 rounded-md p-3 transition duration-300
                hover:bg-neutral-600 hover:ease-in"
            />
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
        <Popover.Group as="nav" className="hidden space-x-2 md:flex">
          <Link
            className={
              pathname == "/about"
                ? "rounded-md px-3 py-2 text-sm font-bold text-stone-50 transition duration-300"
                : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/about"
          >
            About
          </Link>
          <Link
            className={
              pathname == "/projects"
                ? "rounded-md px-3 py-2 text-sm font-bold text-stone-50 transition duration-300 "
                : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/projects"
          >
            Projects
          </Link>
          {/* <Link
            className={
              pathname == "/book-notes"
                ? "rounded-md py-2 px-3 text-sm font-bold text-stone-50 transition duration-300 "
                : "rounded-md py-2 px-3 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/book-notes"
          >
            Book Notes
          </Link> */}
          <Link
            className={
              pathname == "/resources"
                ? "rounded-md px-3 py-2 text-sm font-bold text-stone-50 transition duration-300 "
                : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/resources"
          >
            Resources
          </Link>
        </Popover.Group>
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
          className=" absolute right-0 top-0 p-4 w-56 origin-top-right transition md:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" onClick={() => close()}>
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
              <div className="space-y-6 px-5 py-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-right">
                  <Link
                    className={
                      pathname == "/about"
                        ? "rounded-md px-3 py-2 text-sm font-bold text-stone-500 transition duration-300"
                        : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-500"
                    }
                    href="/about"
                    onClick={() => close()}
                  >
                    About
                  </Link>
                  <Link
                    className={
                      pathname == "/projects"
                        ? "rounded-md px-3 py-2 text-sm font-bold text-stone-500 transition duration-300"
                        : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-500"
                    }
                    href="/projects"
                    onClick={() => close()}
                  >
                    Projects
                  </Link>
                  {/* <Link
                    className={
                      pathname == "/book-notes"
                        ? "rounded-md py-2 px-3 text-sm font-bold text-stone-500 transition duration-300"
                        : "rounded-md py-2 px-3 text-sm text-stone-400  transition duration-300  hover:text-stone-500"
                    }
                    href="/book-notes"
                  >
                    Book Notes
                  </Link> */}
                  <Link
                    className={
                      pathname == "/resources"
                        ? "rounded-md px-3 py-2 text-sm font-bold text-stone-500 transition duration-300"
                        : "rounded-md px-3 py-2 text-sm text-stone-400  transition duration-300  hover:text-stone-500"
                    }
                    href="/resources"
                    onClick={() => close()}
                  >
                    Resources
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
