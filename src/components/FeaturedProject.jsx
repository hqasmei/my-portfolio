import React from "react"
import { CgArrowTopRightR } from "react-icons/cg"
import { FiGithub } from "react-icons/fi"

export default function FeaturedProject(props) {
  const { name, description, image, link, github, tech, reverse } = props

  return (
    <div>
      {reverse === false ? (
        <div className="flex flex-col my-8 justify-center text-center items-center md:space-x-6 md:flex-row">
          <img
            src={image}
            alt=""
            className="rounded-lg drop-shadow-2xl md:w-1/2"
          />

          <div className="conatiner m-4 justify-center text-center items-center z-10  md:relative md:w-1/2 ">
            <p className="text-teal-500 font-semibold mb-2">Featured Project</p>
            <p className="text-4xl font-bold mb-2">{name}</p>
            <p className="z-20 px-2 text-xl mb-4 md:px-12">{description}</p>
            <div className="flex flex-row justify-center md:space-x-4 mb-4">
              {tech.map((item, idx) => {
                return (
                  <p key={idx} className="mr-2 text-neutral-500">
                    {item}
                  </p>
                )
              })}
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <a href={github} rel="noreferrer" target="_blank">
                <FiGithub size={30} />
              </a>
              <a href={link} rel="noreferrer" target="_blank">
                <CgArrowTopRightR size={30} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center text-center items-center my-8 md:space-x-6 md:flex-row-reverse">
          <img
            src={image}
            alt=""
            className="rounded-lg drop-shadow-2xl md:w-1/2"
          />

          <div className="conatiner m-4 justify-center text-center items-center z-10  md:relative md:w-1/2 ">
            <p className="text-teal-500 font-semibold mb-2">Featured Project</p>
            <p className="text-4xl font-bold mb-2">{name}</p>
            <p className="z-20 px-2 text-xl mb-4 md:px-12">{description}</p>
            <div className="flex flex-row justify-center md:space-x-4 mb-4">
              {tech.map((item, idx) => {
                return (
                  <p key={idx} className="mr-2 text-neutral-500">
                    {item}
                  </p>
                )
              })}
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <a href={github} rel="noreferrer" target="_blank">
                <FiGithub size={30} />
              </a>
              <a href={link} rel="noreferrer" target="_blank">
                <CgArrowTopRightR size={30} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
