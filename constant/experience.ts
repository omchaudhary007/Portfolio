import { Experience } from "@/types/types";

export const experience: Array<Experience> = [
  {
    companyName: "OnedigiStore",
    companyLogo: "/onedigistore.jpg",
    from: "Aug 2025",
    to: "Nov 2025",
    location: "Hydrabad(Remote)",
    role: "Software Engineer Intern",
    technologies: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
    ],
    work: [
      {
        id: 1,
        text: "Built a Slack-native workflow automation tool with automated task creation, assignment based on team availability, and approval/escalation pipelines via Slack and email.",
      },
      {
        id: 2,
        text: "Integrated a regression-based ML model to predict task deadlines and prioritize work based on complexity and client subscription plans.",
      },
      {
        id: 3,
        text: "Developed a role-based dashboard for client onboarding, task management, approvals, and asset handling with Google Drive integration.",
      },
    ],
  },
  {
    companyName: "Mna Studios",
    companyLogo: "/mnastudios.jpg",
    from: "Dec 2024",
    to: "Feb 2025",
    location: "Delhi(Remote)",
    role: "Web Developer Intern",
    technologies: ["Next.js", "Framer-motion", "TypeScript", "Tailwind-CSS"],
    work: [
      {
        id: 1,
        text: "Redesigned and rebuilt the official MnA Studio website by migrating it from a traditional static implementation to a modern Next.js-based architecture with Tailwind CSS.",
      },
      {
        id: 2,
        text: "Worked primarily on UI and interaction development using Framer Motion to improve layout, motion, and overall user experience.",
      },
      {
        id: 3,
        text: "Created the landing page for MnA Studios separate brand, 23Ventures, with responsive layouts and motion-driven sections.",
      },
    ],
  },
];
