import React from "react"

export default function Card(props) {
  const { title, description, image, path } = props
  return (
    <div className="wrapper antialiased text-gray-900">
      <div>
        <img
          src={image}
          alt=" random imgee"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div className="mt-1">{description}</div>
            <div className="mt-4">
              <a href={path} alt="" className="px-4 py-2 rounded-lg border-2 border-teal-600 text-teal-600 font-semibold hover:border-teal-400 hover:text-teal-400">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
