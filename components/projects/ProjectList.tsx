import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

export function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No Projects found.</p>
      </div>
    );
  }

  return (
    <div className="py-4 grid md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.projectName} project={project} />
      ))}
    </div>
  );
}
