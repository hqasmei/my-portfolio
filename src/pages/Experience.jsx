import React from "react"
import Tabs from "../components/Tabs"
export default function Experience() {
  return (
    <div className="container mx-auto">
      <section className="mx-4 py-16 md:py-48 xl:py-72">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl mb-4 md:mb-8">
            Where I&#39;ve Worked
          </p>
          <Tabs />
        </div>
      </section>
    </div>
  )
}
