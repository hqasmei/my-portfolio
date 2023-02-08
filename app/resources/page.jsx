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
          <div className="divide-y divide-gray-100">
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
              return (
                <details key={idx} className="group">
                  <summary className="text-secondary-900 flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-neutral-100">
                    {item.section}
                    <div className="text-secondary-500">
                      <RxCaretDown
                        size={30}
                        className="block transition-all duration-300 group-open:rotate-180"
                      />
                    </div>
                  </summary>
                  <div className="text-secondary-500 pb-4">
                    {" "}
                    {sortedSubArr.map((i, i_idx) => {
                      return (
                        <p className="text-neutral-200">
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
                      )
                    })}
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
