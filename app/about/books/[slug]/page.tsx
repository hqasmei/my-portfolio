import { getPostBySlug } from "@/lib/mdx"

interface PageContent {
  meta: { title: string }
  content: string
}

const getPageContent = async (slug: string): Promise<PageContent> => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}): Promise<{ title: string; slug: string }> {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title, slug: params.slug }
}

interface PageProps {
  params: { slug: string }
}

const Page = async ({ params }: PageProps) => {
  const { content } = await getPageContent(params.slug)

  return (
    <section className="py-24">
      <div className="container py-4 prose">{content}</div>
    </section>
  )
}

export default Page
