"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { tags, projects } from "@/utils/constants";

const Portfolio = () => {
  const [category, setCategory] = useState("All");

  const handleTagClick = (tag: string) => {
    setCategory(tag);
  };

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(category));

  return (
    <section
      id="portfolio"
      className="flex  flex-col items-center py-24 md:h-screen"
    >
      <h1 className="mb-4 text-center text-4xl font-bold">
        PORTFOLIO
        <hr className="mx-auto my-2 h-1 w-6 rounded border-0 bg-purple-600"></hr>
      </h1>

      <div className="mb-8 flex flex-row space-x-2">
        {tags.map((tag) => {
          return (
            <button
              key={tag}
              className={`${
                tag === category ? "bg-gray-500 text-white" : "bg-gray-200"
              } rounded-lg px-4 py-2`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col space-y-4">
        {filteredProjects.map((project, idx) => {
          return (
            <Link
              href={project.link}
              target="_blank"
              key={idx}
              className="flex flex-row items-center justify-between space-x-4 rounded-md bg-gray-200 p-4"
            >
              <div className="rounded-full bg-gray-300 p-4">
                {project.emoji}
              </div>
              <p>{project.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
