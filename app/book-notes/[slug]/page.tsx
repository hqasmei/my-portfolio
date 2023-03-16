import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getBookBySlug } from "../../../lib/mdx";
import { BsArrowBarLeft } from "react-icons/bs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getBookBySlug("books", slug);
  return { meta, content };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { meta, content } = await getPageContent(params.slug);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 sm:py-28 md:space-y-4 md:px-0">
        <Link href={`/book-notes`} className="group text-stone-300">
          <div className="flex flex-row items-center space-x-2 group-hover:text-stone-400">
            <BsArrowBarLeft size={25} />
            <p className="text-lg">Back</p>
          </div>
        </Link>

        <div className="prose prose-invert">{content}</div>
      </div>
    </main>
  );
};

export default Page;
