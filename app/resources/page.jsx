import React from "react"

const resources = [
  {
    name: "goodbrief",
    description: "A random generator for design briefs.",
    link: "https://goodbrief.io/",
  },
  {
    name: "Midjourney",
    description: "AI Text to Image Generator.",
    link: "https://midjourney.com/home/?callbackUrl=%2Fapp%2F",
  },
  {
    name: "freepik",
    description: "Image bank website.",
    link: "https://www.freepik.com/free-photos-vectors/flat-illustration",
  },
  {
    name: "removebg",
    description: "Free Background Remover.",
    link: "https://www.remove.bg/",
  },
  {
    name: "favicon.io",
    description: "Free favicon generator.",
    link: "https://favicon.io/",
  },
  {
    name: "React Icons",
    description: "Popular icon packs.",
    link: "https://react-icons.github.io/react-icons",
  },
  {
    name: "heroicons",
    description: "Icons from Tailwind CSS.",
    link: "https://heroicons.com/",
  },
  {
    name: "Flowbite",
    description: "Components using Tailwind CSS.",
    link: "https://flowbite.com/",
  },
  {
    name: "Vercel",
    description: "Easy deployment platform.",
    link: "https://vercel.com/",
  },
  {
    name: "PlanetScale",
    description: "Serverless MySQL  platform.",
    link: "https://planetscale.com/",
  },
  {
    name: "umami",
    description: "Alternative to Google Analytics.",
    link: "https://umami.is/",
  },
  {
    name: "Rapid API",
    description: "API Hub.",
    link: "https://rapidapi.com/hub",
  },
  {
    name: "Excalidraw",
    description: "Virtual collaborative whiteboard.",
    link: "https://excalidraw.com/",
  },
  {
    name: "Craft",
    description: "Alternative to Notion.",
    link: "https://www.craft.do/",
  },
  {
    name: "Futurepedia.io",
    description: "AI tool directory.",
    link: "https://www.futurepedia.io/",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Product Hunt",
    description: "Curation of the best new products.",
    link: "https://www.producthunt.com/",
  },
  {
    name: "Gumroad",
    description: "E-commerce platform.",
    link: "https://gumroad.com/",
  },
]

export default function ResourcesPage() {
  const sortedArr = resources.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-white md:pb-2 md:text-6xl">
          Resources.
        </h1>
        <p className="text-md pb-4 leading-5 text-neutral-100  sm:text-xl">
          Here are a few resources I've have compiled along the way that I
          reference frequently and find very useful. It's a work in progress.
        </p>

        <ul className="text-neutral-100">
          {sortedArr.map((item, idx) => {
            return (
              <li key={idx}>
                <p>
                  {" "}
                  <a href={item.link} target="_blank" className="underline">
                    {item.name}
                  </a>
                  {" - "}
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
