import React from "react"
import Link from "next/link"
import Content from "@/components/Content"
import { BsArrowBarLeft } from "react-icons/bs"
import { getAllPostsMeta } from "../../../lib/mdx"
import { getAllTags } from "../../../lib/tags"

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const tempId = params.id

  const posts = await getAllPostsMeta(tempId)
  const tags = await getAllTags(tempId)

  return (
    <main className="mx-auto w-full flex max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0 sm:py-28 md:space-y-4  ">
        <Link href="/about" className="text-stone-300 group">
          <div className="flex flex-row space-x-2  group-hover:text-stone-400">
            <BsArrowBarLeft size={25} />
            <p className="md:text-lg"> About</p>
          </div>
        </Link>
        <h1 className="text-white text-4xl font-bold md:text-6xl ">
          {params.id.charAt(0).toUpperCase() + params.id.slice(1)}
        </h1>

        <Content params={params} posts={posts} tags={tags} />
      </div>
    </main>
  )
}

export default BlogPage
