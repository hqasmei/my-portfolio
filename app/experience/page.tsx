"use client" // this is a client component

import React from "react"
import { useState } from "react"

import { experienceData } from "../../data/experienceData"

const ExperiencePage = () => {
  const [openTab, setOpenTab] = useState("Proterra Ag")

  return (
    <main className="min-h-screen mt-12">
      <div className="container flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl mb-8 md:text-5xl">
          Where I&#39;ve Worked
        </p>

        <div className="container flex flex-col space-y-4 items-center text-center justify-center">
          <div className="container overflow-x-auto">
            <ul className="flex flex-row text-left wrap space-x-4 justify-center">
              {experienceData.map((tab) => (
                <li key={tab.organization}>
                  <button
                    onClick={() => setOpenTab(tab.organization)}
                    className={` ${
                      openTab === tab.organization
                        ? "bg-teal-600 font-semibold rounded-sm font-mono text-neutral-100 text-xs md:text-base"
                        : "hover:bg-slate-100 font-mono rounded-sm text-xs md:text-base"
                    } inline-block px-2 py-2 font-mono rounded-sm text-xs md:text-base`}
                  >
                    {tab.organization}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="container mt-8 text-center md:w-3/4 md:mt-0">
            {experienceData.map((tab) => (
              <div
                key={tab.organization}
                className={tab.organization === openTab ? "block" : "hidden"}
              >
                <span className="text-lg md:text-2xl font-bold">
                  {tab.role}
                </span>
                <div className="flex flex-col justify-center space-x-1 md:flex-row  md:items-baseline">
                  <span className="text-lg md:text-xl font-bold text-teal-500">
                    {tab.organization}
                  </span>
                  <span className="text-sm md:text-lg">{tab.location}</span>
                </div>

                <p className="text-sm md:text-md lg:text-lg text-slate-600 mb-4">
                  {tab.period}
                </p>
                <ul className="ml-4">
                  {tab.description.map((bullet, idx) => {
                    return (
                      <li
                        className="text-sm text-left md:text-xl list-disc text-slate-600"
                        key={idx}
                      >
                        {bullet}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ExperiencePage
