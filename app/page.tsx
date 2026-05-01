import { ExperienceList } from "@/components/experience/ExperienceList";
import Hero from "@/components/Hero";
import { ProjectList } from "@/components/projects/ProjectList";
import { Button } from "@/components/ui/button";
import { experience } from "@/constant/experience";
import { projects } from "@/constant/projects";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Hero />
      <h3 className="pt-4 text-lg font-medium">Experience</h3>
      <ExperienceList
        experiences={experience.slice(0, 3)}
        isExpendeble={true}
      />
      {experience.length ? (
        <Button className="block mx-auto" variant={"outline"}>
          <Link href={"/work"}>Show all work experiences</Link>
        </Button>
      ) : null}
      <h3 className="pt-10 pb-2 text-lg font-medium">Projects</h3>
      <ProjectList projects={projects.slice(0, 4)} />
      {projects.length ? (
        <Button className="block mx-auto my-6" variant={"outline"}>
          <Link href={"/projects"}>Show all projects</Link>
        </Button>
      ) : null}
    </div>
  );
}
