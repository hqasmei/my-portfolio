import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getAllPostsMeta } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Books | Hosna Qasmei",
  description: "Here are some books",
}

interface Post {
  title: string
  author: string
  slug: string
  publishDate: string
}

const BooksPage = async (): Promise<JSX.Element> => {
  const posts: Post[] = await getAllPostsMeta()

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-black md:pb-4 md:text-6xl">
          Books.
        </h1>
        <p className="pb-4 text-xl text-neutral-600">
          Here is a list books I&#39;ve read, currently reading or want to read!
        </p>

        <h1 className="text-3xl font-bold">All Posts</h1>
        <div className="flex gap-6 mt-6">
          {posts?.map((post) => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className="p-8 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-sm">{post.author}</p>
              <time className="text-[12px] text-gray-400">
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
