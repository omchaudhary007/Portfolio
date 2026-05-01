import { ProjectList } from "@/components/projects/ProjectList";
import { projects } from "@/constant/projects";

export default function Projects() {
  return (
    <div className="py-8 flex flex-col gap-3">
      <h3 className="text-xl opacity-90">Projects</h3>
      <p className="text-sm opacity-70">
        A few products I have shipped.
      </p>
      <ProjectList projects={projects} />
    </div>
  );
}
