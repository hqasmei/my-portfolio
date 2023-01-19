import React from "react"
import Image from "next/image"
import { CgArrowTopRightR } from "react-icons/cg"
import { AiOutlineGithub } from "react-icons/ai"

import SlideUp from "../../components/SlideUp"

import { projectsData } from "../../data/projectsData"

const ProjectsPage = () => {
  return (
    <main className="min-h-screen mt-12">
      <div className="container flex flex-col items-center justify-center mt-10 mx-auto">
        <p className="font-semibold text-4xl lg:mb-4 md:text-5xl">
          What I&#39;ve Built
        </p>

        {projectsData.map((item, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                {item.reverse === false ? (
                  <div className="flex flex-col my-20 justify-center text-center items-center md:space-x-6 md:flex-row">
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg drop-shadow-2xl md:w-1/2"
                    />

                    <div className="conatiner m-4 justify-center text-center items-center z-10  md:relative md:w-1/2 ">
                      <p className="text-teal-500 font-semibold mb-2">
                        Featured Project
                      </p>
                      <p className="text-4xl font-bold mb-2">{item.name}</p>
                      <p className="z-20 px-2 text-xl mb-4 md:px-12">
                        {item.description}
                      </p>
                      <div className="flex flex-row justify-center md:space-x-4 mb-4">
                        {item.tech.map((item, idx) => {
                          return (
                            <p key={idx} className="mr-2 text-neutral-500">
                              {item}
                            </p>
                          )
                        })}
                      </div>
                      <div className="flex flex-row justify-center space-x-4">
                        <a href={item.github} rel="noreferrer" target="_blank">
                          <AiOutlineGithub size={30} />
                        </a>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          <CgArrowTopRightR size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center text-center items-center my-8 md:space-x-6 md:flex-row-reverse animate-slideUpCubiBezier animation-delay-2">
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg drop-shadow-2xl md:w-1/2"
                    />

                    <div className="conatiner m-4 justify-center text-center items-center z-10  md:relative md:w-1/2 ">
                      <p className="text-teal-500 font-semibold mb-2">
                        Featured Project
                      </p>
                      <p className="text-4xl font-bold mb-2">{item.name}</p>
                      <p className="z-20 px-2 text-xl mb-4 md:px-12">
                        {item.description}
                      </p>
                      <div className="flex flex-row justify-center md:space-x-4 mb-4">
                        {item.tech.map((item, idx) => {
                          return (
                            <p key={idx} className="mr-2 text-neutral-500">
                              {item}
                            </p>
                          )
                        })}
                      </div>
                      <div className="flex flex-row justify-center space-x-4">
                        <a href={item.github} rel="noreferrer" target="_blank">
                          <AiOutlineGithub size={30} />
                        </a>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          <CgArrowTopRightR size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </SlideUp>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default ProjectsPage
