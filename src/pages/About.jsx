import React from "react"
import CardsGrid from "../components/CardsGrid"

import { aboutData } from "../data"

export default function About() {
  return (
    <div className="container mx-auto">
      <section className="mx-4 py-16 md:py-40 xl:py-40">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl mb-4 md:mb-8">About Me</p>
        </div>

        <CardsGrid data={aboutData} />
      </section>
    </div>
  )
}
