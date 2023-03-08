import React from "react"
import Link from "next/link"
import { getAllPostsMeta } from "../../../lib/mdx"

const BlogPage = async ({ params }: { params: { id: string } }) => {
 
  const tempId = params.id

  const posts = await getAllPostsMeta(tempId)

  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0  sm:py-28 md:space-y-0">
        <h1 className="text-white text-4xl font-bold md:pb-4 md:text-6xl ">
          {params.id.charAt(0).toUpperCase() + params.id.slice(1)}
        </h1>
        <div className="flex flex-col space-y-2">
          {posts?.map((post) => (
            <Link
              href={`about/${params.id}/${post.slug}`}
              key={post?.title}
              className="p-8 rounded-md shadow-md bg-white"
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

export default BlogPage
