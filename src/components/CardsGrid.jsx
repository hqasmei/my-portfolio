import React from "react"
import Card from "./Card"

export default function CardsGrid(props) {
  const { header } = props
  return (
    <section className="mx-4 my-16 md:mx-auto md:pt-20">
      <div className="container flex flex-col text-center items-center mx-auto space-y-4 md:text-left">
        <div>
          <h1 className="font-bold text-4xl">{header}</h1>
        </div>

        <div className="flex flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}
