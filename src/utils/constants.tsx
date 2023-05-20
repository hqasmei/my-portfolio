import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiSupabase,
  SiExpo,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiVercel,
  SiPython,
} from "@/icons";

export const tags = ["All", "Web", "Mobile"];

export const projects = [
  {
    title: "SportsTable",
    link: "https://sportstable.io/",
    tags: ["All", "Web"],
    image:
      "https://res.cloudinary.com/duud9d8dv/image/upload/v1684357011/sportstable_r0zrzn.png",
    emoji: "⚽",
  },
  {
    title: "CaptionAI",
    link: "https://captionai.vercel.app/",
    tags: ["All", "Web"],
    image:
      "https://res.cloudinary.com/duud9d8dv/image/upload/v1684356885/captionai_zxi5dn.png",
    emoji: "🙌",
  },
  {
    title: "Yad Bigee",
    link: "https://yadbigee.com/",
    tags: ["All", "Mobile"],
    image:
      "https://res.cloudinary.com/duud9d8dv/image/upload/v1684357010/yadbigee_fml2dz.png",
    emoji: "🧠",
  },
];

export const skills = [
  { skill: <SiHtml5 size={30} /> },
  { skill: <SiCss3 size={30} /> },
  { skill: <SiTailwindcss size={30} /> },
  { skill: <SiJavascript size={30} /> },
  { skill: <SiTypescript size={30} /> },
  { skill: <SiPostgresql size={30} /> },
  { skill: <SiSupabase size={30} /> },
  { skill: <SiNextdotjs size={30} /> },
  { skill: <SiVercel size={30} /> },
  { skill: <SiExpo size={30} /> },
  { skill: <SiPython size={30} /> },
];
