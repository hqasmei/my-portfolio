import React from "react"
import Card from "./Card"

export default function CardsGrid(props) {
  const { data } = props
  return (
    <div className="container flex flex-col text-center items-center mx-auto space-y-4 md:text-left">
      <div className="flex flex-col space-x-0 space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        {data.map((item, idx) => {
          return (
            <Card
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              path={item.path}
            />
          )
        })}
      </div>
    </div>
  )
}
