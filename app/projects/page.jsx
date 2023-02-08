import React from "react"
import Link from "next/link"

import { PROJECTS } from "@/data"

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
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {PROJECTS.map((item, idx) => {
              return (
                <Link key={idx} href={item.link} target="_blank">
                  <div class="mx-auto max-w-md rounded-lg bg-white shadow hover:bg-neutral-200">
                    <div class="p-4">
                      {item.icon}
                      <h3 class="text-xl font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p class="mt-1 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section></section>
      </div>
    </main>
  )
}
