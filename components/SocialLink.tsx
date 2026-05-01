import { type SocialLink } from "@/types/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { sociallinks } from "@/constant/socialLinks";

export default function SocialLink({ iconStyle }: { iconStyle: string }) {
  return (
    <div className="flex items-end gap-2">
      {sociallinks.map((links) => (
        <Link href={links.link} target="_blank" key={links.link}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <links.icon className={iconStyle} />
              </span>
            </TooltipTrigger>
            <TooltipContent className="capitalize">{links.name}</TooltipContent>
          </Tooltip>
        </Link>
      ))}
    </div>
  );
}
