import { ComponentType } from "react";

export interface SocialLink {
  name: string;
  link: string;
  icon: ComponentType<{ className: string }>;
}

export interface Experience {
  companyName: string;
  companyLogo: string;
  role: string;
  technologies: Array<string>;
  from: string;
  to: string;
  location: string;
  work: Array<{ id: number; text: string }>;
}

export interface Project {
  projectName: string;
  projectImg: string;
  projectDescription: string;
  projectTechnologies:Array<string>;
  github: string;
  livelink: string;
  videolink?: string;
}
