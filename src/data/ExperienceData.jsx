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

const iconStyle = (Icon) => <Icon size={50} />

export const experienceData = [
  {
    role: "Embedded Systems Engineer",
    organization: "Proterra Ag",
    location: "Commerce, CA",
    period: "Feb 2021 – May 2022",
    description: [],
    image: "./assets/images/experience-images/proterraag.png",
  },
  {
    role: "Software Engineer",
    organization: "Teledyne Image Sensors",
    location: "Camarillo, CA",
    period: "Jan 2020 – Dec 2020",
    description: [],
    image: "./assets/images/experience-images/teledyne.png",
  },
  {
    role: "Mission Systems Intern",
    organization: "Northrop Grumman",
    location: "San Diego, CA",
    period: "Jun 2018 – Aug 2018",
    description: [],
    image: "./assets/images/experience-images/northrop.png",
  },
  {
    role: "Software Engineer Intern",
    organization: "RITEC Rugged",
    location: "Simi Valley, CA",
    period: "Feb 2017 - Sep 2017",
    description: [],
    image: "./assets/images/experience-images/ritec.png",
  },
  {
    role: "Mentor",
    organization: "DIY Girls",
    location: "Sylmar, CA",
    period: "Aug 2015 - Dec 2016",
    description: [],
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
