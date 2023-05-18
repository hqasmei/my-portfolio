import React from "react";

import { skills } from "@/utils/constants";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col bg-gray-200 py-24 md:py-0 justify-center text-center md:h-[85vh]"
    >
      <div className="mx-auto max-w-3xl px-4 md:max-w-5xl md:px-0">
        <h1 className="mb-4 text-center text-4xl font-bold">
          ABOUT
          <hr className="mx-auto my-2 h-1 w-6 rounded border-0 bg-purple-600"></hr>
        </h1>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hosna and I am a freelance developer based in Los
              Angeles, CA.
            </p>
            <br />
            <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              On my free time I like to read, play sports, travel, to make
              YouTube videos. I am always seeking new experiences and love to
              keep myself engaged and learning new things.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Tech Stack</h1>

            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span className="mb-2 mr-2 rounded-full bg-gray-100 p-4" key={idx}>
                    {item.skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
