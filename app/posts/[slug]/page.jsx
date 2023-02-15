import fs from "fs"
import moment from "moment"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import PostMetaData from "@/utils/PostMetaData"

const getPostContent = (slug) => {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = PostMetaData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  let date = new Date(post.data.date)
  let formattedDate = moment(date).format("LL")
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <div className="my-12 text-center">
          <h1 className="text-3xl font-bold text-gray-200 md:mx-36">
            {post.data.title}
          </h1>
          <p className="mt-2 text-gray-300">{formattedDate}</p>
        </div>

        <article className="prose lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  )
}

export default PostPage
