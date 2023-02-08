import React from "react"
import { RESOURCES } from "../../data.js"

export default function ResourcesPage() {
  const sortedArr = RESOURCES.sort((a, b) => a.section.localeCompare(b.section))
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-white md:pb-2 md:text-6xl">
          Resources.
        </h1>
        <p className="text-md pb-4 leading-5 text-neutral-100  sm:text-xl">
          Here are a few resources I've have compiled along the way that I
          reference frequently and find very useful. It's a work in progress.
        </p>

        <div className="mx-auto max-w-full">
          <div className="divide-y divide-gray-100">
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
              return (
                <details key={idx} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-neutral-200 group-open:text-neutral-300">
                    {item.section}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="text-secondary-500 pb-4">
                    <ul className="ml-8 list-disc text-neutral-200 ">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              {" "}
                              <a
                                href={i.link}
                                target="_blank"
                                className="font-medium underline hover:text-neutral-400"
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
