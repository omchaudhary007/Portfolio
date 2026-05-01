import { Project } from "@/types/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Github from "@/public/icons/Github";
import { ExternalLink, Play } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-md bg-accent flex flex-col justify-between gap-4">
      <Image
        className="w-full rounded-t-md"
        width={400}
        height={400}
        loading="lazy"
        src={project.projectImg}
        alt={project.projectName}
      />
      <div className="p-3 flex flex-col gap-4">
        <h3 className="text-lg font-medium opacity-90">
          {project.projectName}
        </h3>
        <p className="text-sm opacity-70">{project.projectDescription}</p>
      </div>

      <div className="p-2 flex items-center justify-end gap-2 opacity-70">
        <Button variant={"outline"}>
          <Link href={project.github}>
            <Github className="size-6" />
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link href={project.livelink}>
            <ExternalLink size={6} />
          </Link>
        </Button>
        {project.livelink ? (
          <Button variant={"outline"}>
            <Link href={project.videolink || ""}>
              <Play size={6} />
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
