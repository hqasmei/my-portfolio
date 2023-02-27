import React from "react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Books | Hosna Qasmei",
  description: "Here are some books",
}

export default function BooksPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-black md:pb-4 md:text-6xl">
          Books.
        </h1>
        <p className="pb-4 text-xl text-neutral-600">
          Here is a list books I've read, currently reading or want to read!
        </p>

        <p>Coming Soon...</p>
        {/* <section className="flex flex-col bg-gray-400 md:flex-row">
          <div className="md:w-1/3">
            <Image
              src="https://source.unsplash.com/WLUHO9A_xik/600x900"
              alt=""
              width={200}
              height={200}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div className="md:w-2/3">
            <p>Title</p>
            <p>Author</p>
          </div>
        </section> */}
      </div>
    </main>
  )
}
