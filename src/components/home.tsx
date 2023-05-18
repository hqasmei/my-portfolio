import React from "react";

import { Headshot } from "@/icons";
import TextLoop from "./ui/text-loop";
import { roboto400, roboto500, roboto700 } from "@/styles/fonts";

const Home = () => {
  const loopItems = [
    "Full Stack Developer",
    "Mobile Developer",
    "Software Engineer",
    "YouTuber",
  ];

  return (
    <section
      id="home"
      className="flex h-[85vh] items-center justify-center bg-white text-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-3xl  md:max-w-5xl">
        <div className="my-10 flex flex-col items-center  justify-center space-y-8 px-4 py-16 text-center sm:py-32 md:flex-row md:space-x-14 md:space-y-0 md:py-48 md:text-left">
          <div className="flex flex-col justify-center space-y-2 text-center md:text-left">
            <p className={`${roboto500.className} text-4xl md:text-5xl `}>
              Hi, I&#39;m
            </p>
            <p className={`${roboto700.className} text-5xl md:text-6xl`}>
              Hosna Qasmei.
            </p>
            <p className={`${roboto400.className} text-3xl text-gray-600 `}>
              A <TextLoop loopItems={loopItems} delay={3000} />.
            </p>
          </div>

          <div className="flex items-center justify-center ">
            <Headshot className="rounded-full shadow-lg md:rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
