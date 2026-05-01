"use client";

import { Experience } from "@/types/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
  isExpendable: boolean;
}
export default function ExperienceCard({
  experience,
  isExpendable,
}: ExperienceCardProps) {
  const [isExpended, setExpended] = useState<boolean>(!isExpendable);

  return (
    <div className="flex flex-col gap-4">
      {/* Heading part */}
      <div className="flex items-center justify-between group">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={40}
              height={40}
              className="size-6 rounded-md border-2 border-foreground/60"
            />
            <h3 className="text-lg font-medium opacity-80">
              {experience.companyName}
            </h3>
            {isExpendable && (
              <ChevronRight
                onClick={() => setExpended((prev) => !prev)}
                className={`size-7 p-1 rounded-sm transition-all duration-300 ${isExpended ? "rotate-90 opacity-70" : "rotate-0 opacity-0"} hover:bg-accent hover:opacity-100 group-hover:opacity-70`}
              />
            )}
          </div>
          <p className="text-sm opacity-70">{experience.role}</p>
        </div>

        <div className="flex flex-col gap-1.5 text-end opacity-70 text-sm">
          <p>
            {experience.from} - {experience.to}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {isExpended && (
        <>
          {/* Technologies */}
          <div className="text-sm">
            <p className="font-medium opacity-95">Technologies & Tools</p>
            <p className="py-1 tracking-widest opacity-70 font-light">
              {experience.technologies.toLocaleString()}
            </p>
          </div>
          {/* work-description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-sm"
          >
            <p className="font-medium opacity-95">What I{"'"}ve done</p>
            <ul className="pl-3 py-2 list-disc flex flex-col gap-1.5 opacity-70">
              {experience.work.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </motion.div>
          <div className="w-full border-b border-foreground/10"></div>
        </>
      )}
    </div>
  );
}
