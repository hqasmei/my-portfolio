import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get To Know Me | Hosna Qasmei",
  description: "Welcome to get to know me",
}

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-neutral-100 md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-black md:pb-4 md:text-6xl">
          Get To Know Me.
        </h1>
        <p className="mb-2 text-xl font-semibold text-neutral-800">
          <span className="font-bold"> Yin </span>
          and
          <span className="font-bold"> Yang</span>
        </p>
        <p className="mb-2 text-neutral-800">
          They are opposite but complementary forces that are present in all
          things.
        </p>
        <p className="mb-2 text-neutral-800">
          <span className="font-bold">Yin </span>
          represents the feminine, introspective, dark and receptive aspects of
          nature.
        </p>
        <p className="mb-2 text-neutral-800">
          <span className="font-bold">Yang </span>
          represents the masculine, active, bright, and assertive aspects of
          nature.
        </p>
        <p className="mb-2 text-neutral-800">
          They are not fixed, but rather constantly in flux, with one dominating
          the other in a constant cycle of balance. The idea that two opposing
          forces can exist in balance with each other resonates deeply with me,
          especially as I've come to understand the duality of my own
          personality (being a Gemini).
        </p>

        <p className="mb-2 text-neutral-800">
          I've chosen to represent Yin as my professional career and Yang as my
          personal deeper self. By integrating these two forces, I recognize the
          importance of balancing my professional ambitions with my personal
          growth.
        </p>
      </div>
    </main>
  )
}
