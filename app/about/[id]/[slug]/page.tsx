import { getPostBySlug } from "../../../../lib/mdx"

const getPageContent = async (id: string, slug: string) => {
  const { meta, content } = await getPostBySlug(id, slug)
  return { meta, content }
}

const Page = async ({ params }: { params: { id: string; slug: string } }) => {
  const { meta, content } = await getPageContent(params.id, params.slug)

  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0  sm:py-28 md:space-y-0">
        <h1 className="prose prose-invert prose-neutral-100">{meta.title}</h1>

        <div className="container py-4 prose prose-invert prose-neutral-100 lg:prose-xl">
          {content}
        </div>
      </div>
    </main>
  )
}

export default Page
