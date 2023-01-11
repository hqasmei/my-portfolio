import React from "react"
import Tabs from "../components/Tabs"
export default function Experience() {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="mx-4 py-24 md:py-32  animate-fadeIn animation-delay-2">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl mb-4 md:mb-8 md:text-5xl">
            Where I&#39;ve Worked
          </p>

          <Tabs />
        </div>
      </section>
    </div>
  )
}
