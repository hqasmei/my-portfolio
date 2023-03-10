"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import ButtonGroup from "@/components/ButtonGroup"

type Tags = Record<string, number>

type PostMeta = {
  title?: string
  author?: string
  tags?: string[]
  slug?: string
}

type Post = {
  meta: PostMeta
  content: any
}

interface ContentProps {
  posts: PostMeta[]
  tags: Tags
  params: { id: string }
}

const Content: React.FC<ContentProps> = ({ posts, tags, params }) => {
  const [data, setData] = useState(posts)
  const [filter, setFilter] = useState("all")

    useEffect(() => {
      if (filter === "all") {
        setData(posts)
      } else {
        setData(posts.filter((post) => post.tags?.includes(filter)))
      }
    }, [ filter ] )
  
  return (
    <>
      <ButtonGroup buttons={tags} setFilter={setFilter} />
      <div className="grid grid-cols-1 items-stretch gap-4">
        {data?.map((post) => (
          <div
            key={post?.title}
            className="flex-grow bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:bg-opacity-30 text-white"
          >
            <Link href={`about/${params.id}/${post.slug}`} className=" ">
              <div className="w-full md:w-3/4">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {post.title}
                </h3>
                <p>{post.author}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Content
