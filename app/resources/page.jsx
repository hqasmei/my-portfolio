import React from "react"
import { RESOURCES } from "../../data.js"
import { RxCaretDown } from "react-icons/rx"
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
          <div className="space-y-6">
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
              return (
                <details
                  key={idx}
                  className="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]"
                >
                  <summary className="text-secondary-900 flex cursor-pointer list-none items-center justify-between px-6 py-4 text-lg font-medium">
                    {item.section}
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="text-secondary-500 px-6 pb-6">
                    <ul className="ml-8 list-disc text-neutral-800 ">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx}>
                            <p>
                              <a
                                href={i.link}
                                target="_blank"
                                className="font-medium underline hover:text-neutral-900"
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
