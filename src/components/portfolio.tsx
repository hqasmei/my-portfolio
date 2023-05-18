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
    <section id="portfolio" className="py-24  md:h-screen">
      <div className="flex w-full flex-col items-center px-4 sm:px-0">
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
        <div className="container mx-auto">
          <div className="grid-col-1 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredProjects.map((project, idx) => {
              return (
                <Link href={project.link} target="_blank" key={idx}>
                  <div
                    className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl bg-purple-400 p-10 shadow transition-opacity duration-300 hover:opacity-75"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-purple-400 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                    <p className="text-bold absolute inset-0 flex items-center justify-center text-3xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                      {project.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
