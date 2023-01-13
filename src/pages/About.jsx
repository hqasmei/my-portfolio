import React from "react"

export default function About() {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="mx-4 py-24 md:py-32">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <p className="font-semibold text-4xl mb-8 lg:mb-4 md:mb-8 md:text-5xl">
            About Me
          </p>

          <div className="container flex flex-col items-center justify-center mb-10 mx-auto lg:flex-row ">
            <img
              src="./assets/images/personal-photo-2.png"
              alt=""
              className="rounded-full shadow-lg"
            />

            <div className="p-4 mt-4 lg:mt-0 lg:w-1/2 lg:p-10">
              <p className="text-lg">
                Hi, my name is Hosna and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer
                based in Los Angeles, CA.
              </p>
              <br />
              <p className="text-lg">
                I graduated from California State University, Northridge in 2019
                with a BS in Computer Engineering and have been working in the
                field ever since.
              </p>
              <br />
              <p className="text-lg">
                I have a wide range of hobbies and passions that keep me busy.
                From reading, playing sports, traveling, to making YouTube
                videos, I am always seeking new experiences and love to keep
                myself engaged and learning new things.
              </p>
              <br />
              <p className="text-lg">
                I believe that you should{" "}
                <span className="font-bold text-teal-500">never stop growing</span> and
                that&#39;s what I strive to do, I have a passion for technology
                and a desire to always push the limits of what is possible. I am
                excited to see where my career takes me and am always open to
                new opportunities. 🙂
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
