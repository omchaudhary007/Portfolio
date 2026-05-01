import { Project } from "@/types/types";

export const projects: Array<Project> = [
  {
    projectName: "planZ – Event Management System",
    projectImg: "/planz.jpg",
    projectDescription:
      "planZ is an event management platform for colleges with role-based access and structured event workflows. It includes dashboards for managing events, users, and basic analytics.",
    github: "https://github.com/omchaudhary007/planZ",
    livelink: "https://planz-three.vercel.app/",
    videolink: "https://www.youtube.com/watch?v=ULNeFMfLBXs",
    projectTechnologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Material UI",
    ],
  },
  {
    projectName: "Skillhouse – Freelance Marketplace",
    projectImg: "/skillhouse.jpg",
    projectDescription:
      "Skillhouse is a freelance platform connecting clients and freelancers with project and payment workflows. It supports real-time communication and role-based access.",
    github: "https://github.com/omchaudhary007/skillHouse",
    livelink: "https://skillhouse-sable.vercel.app/",
    videolink: "https://www.youtube.com/watch?v=8DnXAKwpsdE",
    projectTechnologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO",
      "Stripe",
    ],
  },
  {
    projectName: "TalkNet – Real-Time Chat Application",
    projectImg: "/talknet.jpg",
    projectDescription:
      "TalkNet is a real-time chat application with messaging and image sharing features. It includes authentication and live online status tracking.",
    github: "https://github.com/omchaudhary007/TalkNet-Messaging-Platform",
    livelink: "https://talknet-chat.vercel.app/",
    projectTechnologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO",
      "JWT",
    ],
  },
  {
    projectName: "Adoptly – Pet Adoption Platform",
    projectImg: "/adoptly.jpg",
    projectDescription:
      "Adoptly is a React-based platform for browsing pets and sending adoption requests. It includes a simple admin panel for managing listings and requests.",
    github: "https://github.com/omchaudhary007/Adoptly-Pet-Adoption-Platform",
    livelink: "https://adoptly.vercel.app/",
    projectTechnologies: ["React", "Tailwind CSS", "React Query"],
  },
  {
    projectName: "JSON CSV Converter",
    projectImg: "/jsontocsv.jpg",
    projectDescription:
      "A simple web app to convert JSON data to CSV and CSV to JSON. Designed with a clean interface for quick data transformation.",
    github: "https://github.com/omchaudhary007/json-csv-converter",
    livelink: "https://jsoncsvconverter.netlify.app/",
    projectTechnologies: ["JavaScript", "HTML", "CSS"],
  },
];
