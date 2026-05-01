import { Experience } from "@/types/types";
import ExperienceCard from "./ExperienceCard";

interface ExperienceListProps {
  experiences: Experience[];
  isExpendeble?:boolean
}

export function ExperienceList({ experiences,isExpendeble=false }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No work experiences found.</p>
      </div>
    );
  }

  return (
    <div className="py-4 flex flex-col gap-10">
      {experiences.map((experience: Experience) => (
        <ExperienceCard key={experience.companyName} experience={experience} isExpendable={isExpendeble} />
      ))}
    </div>
  );
}
