import React from "react"

export default function Card() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
      <img src="images/database-icon.svg" alt="" className="h-20 m-6" />

      <h2 className="text-center px-2 pb-5">Database Support</h2>

      <a
        href="/"
        className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
      >
        Know More
      </a>
    </div>
  )
}
