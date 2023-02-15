import React from "react"
import PostMetaData from "@/utils/PostMetaData"
import PostPreview from "@/utils/PostPreview"

const BlogPage = () => {
  const postMetadata = PostMetaData()
  const postPreviews = postMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => <PostPreview key={post.slug} {...post} />)

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="pb-4 text-4xl font-bold text-white md:pb-8 md:text-6xl">
          All Posts.
        </h1>
        <div className="grid max-w-6xl grid-cols-1 items-center justify-center">
          {postPreviews}
        </div>
      </div>
    </main>
  )
}

export default BlogPage
