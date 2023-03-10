"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import ButtonGroup from "@/components/ButtonGroup"
import Pagination from "@/components/Pagination"

type Tags = Record<string, number>

type PostMeta = {
  title?: string
  author?: string
  tags?: string[]
  image?: string
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
  const [postsPerPage, setPostsPerPage] = useState(9)

  const lastPostIndex = postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    if (filter === "all") {
      setData(posts)
    } else {
      setData(posts.filter((post) => post.tags?.includes(filter)))
    }
  }, [filter])

  return (
    <>
      <ButtonGroup buttons={tags} setFilter={setFilter} />
      <div className="max-w-3xl grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentPosts?.map((post) => (
          <div
            key={post?.title}
            className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 hover:bg-opacity-30 text-white"
          >
            <Link href={`about/${params.id}/${post.slug}`} className=" ">
              <div className="flex items-center space-x-4 flew-row md:flex-col  md:space-x-0 md:items-start md:jumd:space-y-4">
                <Image
                  src={post.image!}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <div className="w-full md:w-3/4 ">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {post.title}
                  </h1>
                  <p className="text-sm">{post.author}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
      />
    </>
  )
}

export default Content
