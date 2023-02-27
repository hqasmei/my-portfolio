import React from "react"
import Image from "next/image"
import { EXPERIENCE } from "@/utils/data"

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-left md:max-w-5xl">
      <div className="flex flex-col space-y-4 py-24 sm:px-28 sm:py-28 md:space-y-0  ">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent  md:pb-4 md:text-6xl">
          About Me.
        </h1>
        <div className="flex flex-col space-y-5 sm:items-center sm:justify-center  md:flex-row md:space-y-0 md:space-x-4  ">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/headshot.png"
              alt=""
              width={350}
              height={350}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div className="text-neutral-100 md:mt-2 md:w-1/2">
            <p className="text-lg leading-7 ">
              Hi, my name is <span className="font-semibold">Hosna Qasmei</span>
              ! I am a software engineer and developer based in{" "}
              <span className="font-semibold">Los Angeles, CA.</span>
            </p>
            <br />
            <p className="text-lg leading-7">
              I have a wide range of hobbies and passions that keep me busy.
              From making YouTube videos, reading, watching soccer and
              traveling. I am always seeking new experiences and learning new
              things. I believe that you should{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-lg font-semibold text-transparent">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do 🙂.
            </p>
            <br />
          </div>
        </div>

        <div className="flex flex-col pt-16">
          <h1 className="mb-4 text-3xl font-bold text-neutral-100">Career</h1>
          <ol className="relative border-l border-neutral-100">
            {EXPERIENCE.map((item, idx) => {
              return (
                <li key={idx} className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-neutral-100 "></div>

                  <h3 className="text-xl font-semibold text-neutral-100 ">
                    {item.role}
                  </h3>
                  <p className="text-neutral-100 ">
                    <a
                      href={item.link}
                      className="font-medium underline hover:text-neutral-400"
                      target="_blank"
                    >
                      {item.organization}
                    </a>
                    <span className="text-md text-neutral-300">
                      {" • "} {item.location}
                    </span>
                  </p>
                  <p className="text-neutral-300">
                    <span className="text-md text-neutral-300">
                      {item.period}
                    </span>

                    {" • "}
                    {item.time}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </main>
  )
}
