import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stories | Hosna Qasmei",
  description: "Here are some of my stories",
}

export default function StoriesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-black md:pb-4 md:text-6xl">
          Stories.
        </h1>
        <p className="pb-4 text-xl text-neutral-600">
          Here are come of my life experiences!
        </p>
        <p>Coming Soon...</p>
      </div>
    </main>
  )
}
