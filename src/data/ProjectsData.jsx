//  overview: "This is the overview",
//  features: "This is the features",
//  techDetails: "This is the tech details",
//  demo: "This is the demo",
//  conclusion: "This is the conclusion",

export const projectsData = [
  {
    name: "SportsTable",
    projectId: "sportstable",
    description: "This is a test",
    image: "./assets/images/project-images/SportsTable/sportstable-image.png",
    icon: "./assets/images/project-images/SportsTable/sportstable-icon.png",
    link: "https://sportstable.xyz/",
    tech: ["Next.js", "Supabase", "Prisma"],
    overview:
      "As a sports enthusiast, I was inspired to create a web app that brings together the most up-to-date sports highlights in one spot. SportsTable allows users to select from a range of different sports and choose their favorite teams or leagues. They can also save their favorite highlights to their dashboard for easy access. I built the app using Next.js, Supabase, and Prisma, and it is hosted on Vercel.",
    features: [
      "Wide range of sports: My app covers a variety of sports, so users can find highlights from their favorite sports all in one place.",
      "Favorite teams and leagues: Users can select their favorite teams and leagues to customize their highlight feed and get updates on the games that matter most to them.",
      "Dashboard: Users can save their favorite highlights to their dashboard for easy access and review.",
      "Login: Users can create an account to save their favorite teams and highlights, and access their dashboard from any device.",
    ],
    techDetails: [
      "Built using Next.js: I chose to build the app using the Next.js framework, which enables server-rendered React apps with automatic code splitting and optimized performance.",
      "Powered by Supabase: I used Supabase, an open-source realtime database, to store and retrieve data for the app.",
      "Hosted on Vercel: The app is hosted on Vercel, a cloud platform for static sites and serverless functions.",
      "Uses Prisma: I used Prisma, an open-source data management tool, to handle database queries and mutations.",
    ],
    demo: "",
    conclusion:
      "As a developer, I'm always looking for opportunities to create meaningful projects that solve real-world problems. My sports highlights web app is a testament to my passion for sports and my ability to build a functional and user-friendly web app. I hope that this project showcases my skills in modern technologies like Next.js, Supabase, and Prisma, and demonstrates my ability to deliver high-quality projects.",
  },

  {
    name: "PlatoIO",
    projectId: "platoio",
    description: "This is a test",
    image: "./assets/images/project-images/PlatoIO/platoio-image.png",
    icon: "./assets/images/project-images/PlatoIO/platoio-icon.png",
    link: "https://platoio.com/register",
    tech: ["React", "Express", "Postgres"],
    overview:
      "PlatoIO is a to do list app that helps users stay organized and on top of their tasks. Built using the PERN stack and hosted on AWS, PlatoIO is a highly performant and scalable app that can handle a large number of users and transactions.",
    features: [
      "Create, read, update, and delete items",
      "Login system that allows users to access their list from any device",
      "Intuitive interface that is easy to use and navigate",
      "Powerful features that help users stay organized and on top of their tasks",
    ],

    techDetails: [
      "Built using the PERN stack (PostgreSQL, Express, React, and Node.js)",
      "Front end served using AWS Route 53, S3, and CloudFront",
      "Back end hosted on an Elastic Beanstalk instance that serves the Express server ",
      "A PostgreSQL database in Amazon's RDS",
    ],
    demo: "./assets/videos/platoio-demo.mp4",
    conclusion:
      "PlatoIO is a simple and convenient to do list app that helps users stay organized and on top of their tasks. I have additional iterations in progress to further improve and enhance the app, and plan to continue developing new versions and features in the future.",
  },
]
