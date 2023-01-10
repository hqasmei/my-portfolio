import React, { useState } from "react"
import { experienceData } from "../data"

export default function Tabs() {
  const [openTab, setOpenTab] = useState("Proterra Ag")

  return (
    <div className="container flex flex-col items-start text-left justify-center p-6 space-x-4 md:flex-row">
      <div className="container overflow-x-auto md:w-1/4">
        <ul className="flex flex-row text-left wrap space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          {experienceData.map((tab) => (
            <li key={tab.organization}>
              <button
                onClick={() => setOpenTab(tab.organization)}
                className={` ${
                  openTab === tab.organization
                    ? "bg-teal-600 font-semibold rounded-sm font-mono text-neutral-100 text-xs md:text-base"
                    : "hover:bg-slate-100 font-mono rounded-sm text-xs md:text-base"
                } inline-block px-2 py-2 font-mono rounded-sm text-gray-600 text-xs md:text-base`}
              >
                {tab.organization}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mt-8 md:w-1/2 md:mt-0">
        {experienceData.map((tab) => (
          <div
            key={tab.organization}
            className={tab.organization === openTab ? "block" : "hidden"}
          >
            <p>
              <span className="text-xl font-bold">{tab.role}</span>

              <span className="text-xl font-bold text-teal-500">
                {" @ "}
                {tab.organization}
              </span>
            </p>

            <p className="text-md text-slate-600 mb-4">{tab.period}</p>
            <ul className="ml-4">
              {tab.description.map((bullet, idx) => {
                return (
                  <li className="text-lg list-disc text-slate-600" key={idx}>
                    {bullet}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
