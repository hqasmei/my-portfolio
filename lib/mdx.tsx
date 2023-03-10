import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

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

export async function getPostBySlug(id: string, slug: string): Promise<Post> {
  const rootDirectory = path.join(process.cwd(), "content", `${id}`)
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async (slug: string): Promise<PostMeta[]> => {
  const rootDirectory = path.join(process.cwd(), "content", `${slug}`)

  const files = await fs.promises.readdir(rootDirectory)

  let posts: PostMeta[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(slug, file)
    posts.push(meta)
  }

  return posts
}
