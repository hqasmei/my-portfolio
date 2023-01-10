import React from "react"

export default function HeroSection(props) {
  const { intro, name, heading, subtitle, image, button = "" } = props

  return (
    <section className="mx-4 py-32 md:py-48 xl:py-52">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-x-12">
        <div className="w-3/4 md:w-1/2 lg:w-2/6 lg:ml-10 xl:ml-28">
          <img alt="logo" src={image} className="rounded-lg drop-shadow-2xl" />
        </div>

        <div className="flex flex-col space-y-4 md:w-2/5">
          <p className="text-2xl  font-bold text-center pl-1 md:text-left ">
            {intro}
          </p>
          <p className="text-5xl font-bold text-center md:text-left lg:text-6xl">
            {name}
          </p>
          <p className="text-3xl font-semibold leading-10 text-center text-neutral-500 md:text-left ">
            {heading}
          </p>
          <p className="text-xl leading-8 text-center text-neutral-500 md:text-left  xl:pr-36">
            {subtitle}
          </p>
          {button !== "" ? (
            <div className="text-center md:text-left">
              <a href="/">{button}</a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
