import React from "react"
import Link from "next/link"
import { TbHeartHandshake, TbSoccerField } from "react-icons/tb"
import { IoMdPhotos } from "react-icons/io"
export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="pb-2 text-4xl font-bold text-white md:text-6xl">
          Projects.
        </h1>
        <p className="pb-4 text-xl text-neutral-100">
          Here are a few side projects I've been working on to improve my coding
          skills.
        </p>
        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="https://thankfulthoughts.io/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <TbHeartHandshake
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className="font-semibold text-neutral-500 dark:text-neutral-300">
                    Thankful Thoughts
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="https://sportstable.vercel.app/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <TbSoccerField
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className=" font-semibold text-neutral-500 dark:text-neutral-300">
                    SportsTable
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="https://katorfamilyphotos.com/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  {" "}
                  <IoMdPhotos
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className=" font-semibold text-neutral-500 dark:text-neutral-300">
                    Kator Family Photos
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section></section>
      </div>
    </main>
  )
}
