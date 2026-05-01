import { ExperienceList } from "@/components/experience/ExperienceList";
import { experience } from "@/constant/experience";

export default function WorkExperience() {
  return (
    <div className="py-8 flex flex-col gap-3">
      <h3 className="text-xl opacity-90">Work Experience</h3>
      <p className="text-sm opacity-70">
        My work experiences across different companies and roles.
      </p>
      <ExperienceList experiences={experience} />
    </div>
  );
}
