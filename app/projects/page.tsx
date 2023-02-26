import React from "react"
import Link from "next/link" 
import { FEATURED_PROJECTS, ALL_PROJECTS } from "@/utils/data"

export default function ProjectsPage() {
  const sortedArr = ALL_PROJECTS.sort((a, b) =>
    b.section.localeCompare(a.section)
  )

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-neutral-100 md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent   md:pb-4 md:text-6xl">
          Projects.
        </h1>
        <p className="pb-4 text-xl text-neutral-300">
          Here are a few side projects I&#39;ve been working on. Check them out!
        </p>
        <section>
          <h1 className="mb-4 text-xl font-semibold">Featured Projects</h1>
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {FEATURED_PROJECTS.map((item, idx) => {
              return (
                <Link key={idx} href={item.link} target="_blank">
                  <div className="mx-auto max-w-md rounded-lg bg-white shadow hover:bg-neutral-200">
                    <div className="p-4">
                      {item.icon}
                      <h3 className="text-xl font-medium text-neutral-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="mt-10">
          <h1 className="mb-4 text-xl font-semibold">All Projects</h1>
          <div>
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data
              return (
                <>
                  <h1 key={idx} className="mb-2 text-lg font-semibold">
                    {item.section}
                  </h1>
                  <div className="text-secondary-500 pb-4 ">
                    <ul className="ml-8 list-disc space-y-2 text-neutral-100">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              <a
                                href={i.link}
                                target="_blank"
                                className="underline hover:text-neutral-300"
                              >
                                {i.name}
                              </a>
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
