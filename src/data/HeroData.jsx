import * as constants from "../constants"

export const heroOne = {
  reverse: true,
  topLine: {
    text: "Hi, I'm Hosna",
  },
  headline: "Software Engineer and Aspiring Entrepreneur",
  description:
    "Working towards creating software that makes life easier and more meaningful",
  buttons: [
    { label: "My Projects", path: constants.ROUTE_PROJECTS },
    { label: "My Experience", path: constants.ROUTE_EXPERIENCE },
  ],
  imgStart: "start",
  img: "./assets/personal-photo.png",
  start: "true",
}
