// import fs from "fs"
// import path from "path"
// import { compileMDX } from "next-mdx-remote/rsc"

// const rootDirectory = path.join(process.cwd(), "content")

// type Post = {
//   meta: PostMeta
//   content: string
// }

// type PostMeta = {
//   title: string
//   author: string
//   publishDate: string
//   slug: string
// }

// export const getPostBySlug = async (slug: string): Promise<Post> => {
//   const realSlug = slug.replace(/\.mdx$/, "")
//   const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

//   const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })

//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: { parseFrontmatter: true },
//   })

//   console.log(content)
//   return { meta: { ...frontmatter, slug: realSlug }, content }
// }

// export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
//   const files = await fs.promises.readdir(rootDirectory)

//   let posts: PostMeta[] = []

//   for (const file of files) {
//     const { meta } = await getPostBySlug(file)
//     posts.push(meta)
//   }

//   return posts
// }
