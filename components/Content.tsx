"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ButtonGroup from "@/components/ButtonGroup";
import Pagination from "@/components/Pagination";

type Tags = Record<string, number>;

type BookMeta = {
  title?: string;
  author?: string;
  tags?: string[];
  image?: string;
  slug?: string;
};

interface ContentProps {
  books: BookMeta[];
  tags: Tags;
}

const Content: React.FC<ContentProps> = ({ books, tags }) => {
  const [data, setData] = useState(books);
  const [filter, setFilter] = useState("all");
  const [booksPerPage, setBooksPerPage] = useState(6);

  const lastBookIndex = booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentbooks = data.slice(firstBookIndex, lastBookIndex);

  useEffect(() => {
    if (filter === "all") {
      setData(books);
    } else {
      setData(books.filter((books) => books.tags?.includes(filter)));
    }
  }, [filter]);

  return (
    <>
      <ButtonGroup buttons={tags} setFilter={setFilter} />

      <div className="grid max-w-3xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
        {currentbooks?.map((books) => (
          <div key={books?.title} className="text-white">
            <Link href={`book-notes/${books.slug}`} className=" ">
              <div className="flew-row flex   space-x-4 ">
                <Image
                  src={books.image!}
                  alt=""
                  width={100}
                  height={100}
                  className="w-60 rounded"
                />
                <div className="flex w-full flex-col space-y-4">
                  <p className="text-md text-stone-300 underline underline-offset-2 hover:text-stone-400">
                    {books.title}
                  </p>
                  <p className="text-sm">{books.author}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        totalBooks={data.length}
        booksPerPage={booksPerPage}
        setBooksPerPage={setBooksPerPage}
      />
    </>
  );
};

export default Content;
