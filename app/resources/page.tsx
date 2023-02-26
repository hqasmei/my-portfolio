import React from "react"
import { RESOURCES } from "@/utils/data"

export default function ResourcesPage() {
  const sortedArr = RESOURCES.sort((a, b) => a.section.localeCompare(b.section))
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent  md:pb-4 md:text-6xl">
          Resources.
        </h1>
        <p className="text-md pb-4 leading-5 text-neutral-100  sm:text-xl">
          Here are a few resources I've have compiled along the way that I
          reference frequently and find very useful. It's a work in progress.
        </p>
        <div className="mx-auto">
          <div className="text-semibold divide-y divide-neutral-100 text-neutral-100">
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
              return (
                <details key={idx} className="group">
                  <summary className="text-secondary-900 flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium">
                    {item.section}
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="text-secondary-500 pb-4">
                    <ul className="ml-8 list-disc text-neutral-100 ">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              {" "}
                              <a
                                href={i.link}
                                target="_blank"
                                className="underline hover:text-neutral-400"
                              >
                                {i.name}
                              </a>
                              {" - "}
                              {i.description}
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
