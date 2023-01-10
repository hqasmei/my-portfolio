import React from "react"
import Tabs from "../components/Tabs"
export default function Experience() {
  return (
    <div className="container mx-auto" id="experience">
      <section className="mx-4 py-16 md:py-40 xl:py-40">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl">Where I&#39;ve Worked</p>
          <Tabs />
        </div>
      </section>
    </div>
  )
}
