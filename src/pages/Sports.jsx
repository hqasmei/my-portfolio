import React from "react"
import BreadCrumb from "../components/BreadCrumb"

export default function Sports() {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="mx-4 py-24 md:py-32">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <BreadCrumb />
          <p className="font-semibold text-4xl mt-4 mb-4 md:mb-8">Sports</p>
          <p>Coming Soon...</p>
        </div>
      </section>
    </div>
  )
}
