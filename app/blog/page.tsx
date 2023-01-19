import getPostMetadata from "../../components/getPostMetadata"
import PostPreview from "../../components/PostPreview"

const BlogPage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => <PostPreview key={post.slug} {...post} />)

  return (
    <main className="min-h-screen mt-12">
      <div className="container flex flex-col items-center justify-center mt-10 mx-auto">
        <p className="font-semibold text-4xl mb-10 md:text-5xl">All Posts</p>
        <div className="grid grid-cols-1">{postPreviews}</div>
      </div>
    </main>
  )
}

export default BlogPage
