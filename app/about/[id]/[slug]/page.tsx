import React from "react"
import Link from "next/link"
import { getPostBySlug } from "../../../../lib/mdx"
import { BsArrowBarLeft } from "react-icons/bs"
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const { meta } = await getPageContent(params.slug)
//   return { title: meta.title }
// }

const getPageContent = async (id: string, slug: string) => {
  const { meta, content } = await getPostBySlug(id, slug)
  return { meta, content }
}

const Page = async ({ params }: { params: { id: string; slug: string } }) => {
  const { meta, content } = await getPageContent(params.id, params.slug)

  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0 sm:py-28 md:space-y-4 absolute">
        <Link href={`about/${params.id}`} className="text-stone-300 group">
          <div className="flex flex-row space-x-2 items-center group-hover:text-stone-400">
            <BsArrowBarLeft size={25} />
            <p className="text-lg">
              {params.id.charAt(0).toUpperCase() + params.id.slice(1)}
            </p>
          </div>
        </Link>

        <div className="py-4 mx-2 prose prose-invert">{content}</div>
      </div>
    </main>
  )
}

export default Page
