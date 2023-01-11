import React from "react"
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiSwift,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiFigma,
  SiCanva,
  SiGit,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si"

import { FaNode } from "react-icons/fa"

import * as constants from "./constants"

const iconStyle = (Icon) => <Icon size={50} />

export const experienceData = [
  {
    role: "Associate Embedded Systems Engineer",
    organization: "Proterra Ag",
    location: "Commerce, CA",
    period: "Feb 2021 – May 2022",
    description: [
      "Used React, PostgresSQL and an AWS RDS to develop a proprietary Web Application for users to interface and run our product, the HWMS (HyperYield Water Management System), to collect real time data of nutrient level in a fertigation solution.",
      "Researched and tested a variety of ultrasonic distance sensors to read tank level value using an Arduino Uno and Raspberry Pi 4B.",
      "Contributed to the design, assembly and maintenance of the power and electronics box for the HWMS.",
    ],
    image: "./assets/images/experience-images/proterraag.png",
  },
  {
    role: "Software Engineer",
    organization: "Teledyne Imaging Sensors",
    location: "Camarillo, CA",
    period: "Jan 2020 – Dec 2020",
    description: [
      "Created a JavaScript based GUI that displays real time status of test equipment readings",
      "Used REST API to set the desired test mode of an image sensor.",
      "Developed Python modules that automates reduction, analysis, and reporting of image sensors.",
      "Analyzed FITS data cubes to find potential areas of abnormalities in the image sensor.",
    ],
    image: "./assets/images/experience-images/teledyne.png",
  },
  {
    role: "Mission Systems Intern",
    organization: "Northrop Grumman",
    location: "San Diego, CA",
    period: "Jun 2018 – Aug 2018",
    description: [
      "Actively participated in the discussion of goals during biweekly team meetings.",
      "Created and configured Virtual Machines for the Ground Communications Interface Team.",
      "Developed a C# program with the CNI team to receive server data through SNMP network protocol.",
    ],
    image: "./assets/images/experience-images/northrop.png",
  },
  {
    role: "Software Engineer Intern",
    organization: "RITEC Rugged",
    location: "Simi Valley, CA",
    period: "Feb 2017 - Sep 2017",
    description: [
      "Worked with Technical Lead Engineer on EFB system (Electronic Flight Bag)",
      "Manged git repository to keep files up to date.",
      "Hands on experience with embedded systems and Linux.",
      "Edited web interface of the EFB system using HTML/CSS.",
    ],
    image: "./assets/images/experience-images/ritec.png",
  },
  {
    role: "Mentor",
    organization: "DIY Girls",
    location: "Sylmar, CA",
    period: "Aug 2015 - Dec 2016",
    description: [
      "Taught a class of elementary school students about circuits, 3D printing, and programming.",
      "Twice a week at two different schools, 6 hours per week.",
      "Assisted the students on any issues they had with their projects.",
      "Help answer any questions that the students had.",
    ],
    image: "./assets/images/experience-images/diygirls.png",
  },
]

export const educationData = [
  {
    school: "Scrimba",
    period: "Nov 2022",
    received: "UI/UX Fundementals",
    image: "./assets/images/experience-images/scrimba.png",
  },
  {
    school: "Y Combinator",
    period: "Jun 2022 - Aug 2022",
    received: "Startup School",
    image: "./assets/images/experience-images/ycombinator.png",
  },
  {
    school: "UCSD",
    period: "May 2022 – Sep 2022",
    received: "ML Bootcamp Certification",
    image: "./assets/images/experience-images/ucsd.png",
  },
  {
    school: "CSUN",
    period: "Aug 2015 - Aug 2019",
    received: "B.S. in Computer Engineering",
    image: "./assets/images/experience-images/csun.png",
  },
]

export const skillsData = [
  {
    skill: "Python",
    level: "Intermediate",
    image: iconStyle(SiPython),
    section: "Programming Languages",
  },
  {
    skill: "React",
    level: "Intermediate",
    image: iconStyle(SiReact),
    section: "Libraries & Frameworks",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    image: iconStyle(SiJavascript),
    section: "Programming Languages",
  },
  {
    skill: "Swift",
    level: "Beginner/Intermediate",
    image: iconStyle(SiSwift),
    section: "Programming Languages",
  },
  {
    skill: "PostgreSQL",
    level: "Intermediate",
    image: iconStyle(SiPostgresql),
    section: "Programming Languages",
  },
  {
    skill: "HTML",
    level: "Intermediate",
    image: iconStyle(SiHtml5),
    section: "Programming Languages",
  },
  {
    skill: "CSS",
    level: "Intermediate",
    image: iconStyle(SiCss3),
    section: "Programming Languages",
  },
  {
    skill: "Tailwind CSS",
    level: "Intermediate",
    image: iconStyle(SiTailwindcss),
    section: "Libraries & Frameworks",
  },
  {
    skill: "Express",
    level: "Intermediate",
    image: iconStyle(SiExpress),
    section: "Tools & Platforms",
  },

  {
    skill: "Node.js",
    level: "Intermediate",
    image: iconStyle(FaNode),
    section: "Tools & Platforms",
  },
  {
    skill: "Figma",
    level: "Beginner/Intermediate",
    image: iconStyle(SiFigma),
    section: "Design",
  },
  {
    skill: "Canva",
    level: "Beginner",
    image: iconStyle(SiCanva),
    section: "Design",
  },
  {
    skill: "Git",
    level: "Intermediate",
    image: iconStyle(SiGit),
    section: "Tools & Platforms",
  },
  {
    skill: "Docker",
    level: "Beginner",
    image: iconStyle(SiDocker),
    section: "Tools & Platforms",
  },
  {
    skill: "AWS",
    level: "Beginner",
    image: iconStyle(SiAmazonaws),
    section: "Tools & Platforms",
  },
]

export const volunteeringData = [
  {
    role: "Full Stack Engineer",
    organization: "Hack for LA",
    period: "Oct 2022 – Present",
    image: "./assets/images/experience-images/hackforla.png",
  },
  {
    role: "TEALS Teacher Assistant",
    organization: "Microsoft",
    period: "Aug 2019 – Jun 2021",
    image: "./assets/images/experience-images/teals.png",
  },
  {
    role: "Volunteer",
    organization: "Afghan Refugee Relief",
    period: "Oct 2021 – Jun 2022",
    image: "./assets/images/experience-images/arr.png",
  },
  {
    role: "Basketball Coach",
    organization: "YMCA",
    period: "Sep 2019 – Nov 2019",
    image: "./assets/images/experience-images/ymca.png",
  },
]

export const projectsData = [
  {
    name: "SportsTable",
    projectId: "sportstable",
    version: "v1.0.0",
    description:
      "SportsTable is a web app that localizes sports highlights in one place.",
    image: "./assets/images/project-images/SportsTable/sportstable-image.png",
    icon: "./assets/images/project-images/SportsTable/sportstable-icon.png",
    link: "https://sportstable.xyz/",
    github: "https://github.com/hqasmei/sportstable",
    tech: ["React", "Express", "Postgres"],
    overview:
      "As a sports enthusiast, I was inspired to create a web app that brings together the most up-to-date sports highlights in one spot. SportsTable allows users to select from a range of different sports and choose their favorite teams or leagues.",
    demo: "./assets/videos/sportstable-demo.mp4",
    reverse: false,
  },

  {
    name: "PlatoIO",
    projectId: "platoio",
    version: "v1.0.0",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "./assets/images/project-images/PlatoIO/platoio-image.png",
    icon: "./assets/images/project-images/PlatoIO/platoio-icon.png",
    link: "https://platoio.com/register",
    github: "https://github.com/hqasmei/platoio",
    tech: ["React", "Express", "Postgres"],
    overview:
      "PlatoIO is a highly performant and scalable app that can handle a large number of users and transactions.",
    demo: "./assets/videos/platoio-demo.mp4",
    reverse: true,
  },
  {
    name: "Kator Family Photos",
    projectId: "katorfamilyphotos",
    version: "v1.0.0",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image:
      "./assets/images/project-images/KatorFamilyPhotos/katorfamilyphotos-image.png",
    icon: "./assets/images/project-images/KatorFamilyPhotos/katorfamilyphotos-icon.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.netlify.app/",
    tech: ["React", "Tailwind CSS", "Chakra UI"],
    overview:
      "Kator Family Photos is a service that helps individuals and families digitize their physical photos and videos, making it easier to preserve and share these memories with loved ones. Kator Family Photos will digitize it and return the digital copies to the customer.",
    demo: "./assets/videos/katorfamilyphotos-demo.mp4",
    reverse: false,
  },
]

export const aboutData = [
  {
    title: "Travels",
    description:
      "I have gotten the opportunity to travel to a few places. Check out where I've been so far and where I am going next!",
    image: "/assets/images/about-images/travels.jpg",
    path: `${constants.ROUTE_ABOUT}/${constants.ROUTE_TRAVELS}`,
  },
  {
    title: "Books",
    description:
      "See what books I've read, what I'm currently reading and any notes I have taken.",
    image: "/assets/images/about-images/books.jpg",
    path: `${constants.ROUTE_ABOUT}/${constants.ROUTE_BOOKS}`,
  },
  {
    title: "Sports",
    description:
      "I have played sports most of my life. Here are some experiences I have had which each of them and take aways. ",
    image: "/assets/images/about-images/sports.jpg",
    path: `${constants.ROUTE_ABOUT}/${constants.ROUTE_SPORTS}`,
  },
]
