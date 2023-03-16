import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type BookMeta = {
  title?: string;
  author?: string;
  tags?: string[];
  slug?: string;
};

type Book = {
  meta: BookMeta;
  content: any;
};

export async function getBookBySlug(id: string, slug: string): Promise<Book> {
  const rootDirectory = path.join(process.cwd(), "content", `${id}`);
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export const getAllBooksMeta = async (slug: string): Promise<BookMeta[]> => {
  const rootDirectory = path.join(process.cwd(), "content", `${slug}`);

  const files = await fs.promises.readdir(rootDirectory);

  let books: BookMeta[] = [];

  for (const file of files) {
    const { meta } = await getBookBySlug(slug, file);
    books.push(meta);
  }

  return books;
};
