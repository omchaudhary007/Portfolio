"use client";
import Mail from "@/public/icons/Mail";
import { Button } from "./ui/button";
import Link from "next/link";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="w-full mt-10 pt-32 bg-foreground/5 border-t border-border">
      <div className="container max-w-3xl mx-auto px-2">
        <div className="flex items-end justify-between">
          <p className="text-sm opacity-70">
            &copy; 2026{" "}
            <span className="hidden md:inline-flex">Om chaudhary.</span> All
            rights reserved.
          </p>
          <div className="flex flex-col gap-3">
            <p>Connect</p>
            <SocialLink iconStyle="size-6 sm:size-8 p-1 rounded bg-accent border border-foreground/10" />
          </div>
        </div>
        <h3 className="font-display text-foreground/50 text-5xl sm:text-[5rem] pt-10 pb-2 text-center font-extrabold mask-b-from-50% mask-b-to-transparent">
          Om chaudhary
        </h3>
      </div>
    </footer>
  );
}
