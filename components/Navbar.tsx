"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="absolute  w-full">
      <nav className="mx-auto flex max-w-3xl my-4 items-center justify-between px-6 md:px-0">
        <div className="flex">
          <Link href="/">
            <Image src="/light-logo.png" alt="" width={40} height={40} />
          </Link>
        </div>
        <div className="flex">
          <Link
            className={
              pathname == "/about"
                ? "rounded-md py-2 px-3 text-sm font-bold text-stone-50 transition duration-300"
                : "rounded-md py-2 px-3 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/about"
          >
            About
          </Link>
          <Link
            className={
              pathname == "/projects"
                ? "rounded-md py-2 px-3 text-sm font-bold text-stone-50 transition duration-300 "
                : "rounded-md py-2 px-3 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/projects"
          >
            Projects
          </Link>

          <Link
            className={
              pathname == "/resources"
                ? "rounded-md py-2 px-3 text-sm font-bold text-stone-50 transition duration-300 "
                : "rounded-md py-2 px-3 text-sm text-stone-400  transition duration-300  hover:text-stone-50"
            }
            href="/resources"
          >
            Resources
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
