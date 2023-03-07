import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get To Know Me | Hosna Qasmei",
  description: "Welcome to get to know me",
}

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-neutral-100 md:max-w-5xl">
      <div className="py-24 sm:py-28">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent   md:pb-4 md:text-6xl">
          Etc.
        </h1>
        <p className="pb-4 text-xl text-neutral-300">
          Here are a few side projects I&#39;ve been working on. Check them out!
        </p>

        <section className="mt-10">
          <h1 className="mb-4 text-xl font-semibold">All Projects</h1>
          <div>

          </div>
        </section>
      </div>
    </main>
  )
}
