import React from "react"

import FeaturedProject from "../components/FeaturedProject"

import { projectsData } from "../data"

export default function Projects() {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="mx-4 py-24 md:py-32">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl mb-4 md:mb-8">
            What I&#39;ve Built
          </p>

          {projectsData.map((item, idx) => {
            return (
              <FeaturedProject
                key={idx}
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
                github={item.github}
                tech={item.tech}
                reverse={item.reverse}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
