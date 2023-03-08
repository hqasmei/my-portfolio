import React from "react"
import Link from "next/link"
import { FEATURED_PROJECTS, ALL_PROJECTS } from "@/utils/data"

export default function ProjectsPage() {
  const sortedArr = ALL_PROJECTS.sort((a, b) =>
    b.section.localeCompare(a.section)
  )

  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="pt-24 sm:pt-28 text-center px-6 md:px-0 md:text-left">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent text-center  md:pb-4 md:text-6xl">
          Projects.
        </h1>
        <p className="pb-4 text-xl text-neutral-300 text-center ">
          Here are a few side projects I&#39;ve been working on. Check them out!
        </p>
        <section>
          <h1 className="mb-4 text-xl font-semibold">Featured Projects</h1>
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {FEATURED_PROJECTS.map((item, idx) => {
              return (
                <Link key={idx} href={item.link} target="_blank">
                  <div className="mx-auto p-4 flex flex-row space-x-4 md:space-x-0 md:flex-col max-w-md rounded-lg bg-neutral-800 shadow hover:bg-neutral-700 text-left">
                    <div className="flex items-center justify-center md:justify-start">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-medium text-neutral-100">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
