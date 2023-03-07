import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Travel | Hosna Qasmei",
  description: "Here are some of my travels",
}

export default function TravelPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-black md:pb-4 md:text-6xl">
          Travel.
        </h1>
        <p className="pb-4 text-xl text-neutral-600">
          Here is a list of places I&#39;ve visited and want to visit!
        </p>
        <p>Coming Soon...</p>
      </div>
    </main>
  )
}
