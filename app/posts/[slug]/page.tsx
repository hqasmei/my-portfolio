import fs from "fs"
import moment from "moment"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

const getPostContent = (slug: string) => {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
   let date = new Date(post.data.date)
   let formattedDate = moment(date).format("LL")
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-3xl text-teal-600 font-bold md:mx-36">
          {post.data.title}
        </h1>
        <p className="text-slate-400 mt-2">{formattedDate}</p>
      </div>

      <article className="prose mx-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
