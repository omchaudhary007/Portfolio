"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 p-4 ${scrolled ? "bg-background/95" : "bg-none"} flex items-center justify-between`}
    >
      <nav className="flex gap-4 text-sm opacity-70">
        <Link href={"/"}>Home</Link>
        <Link href={"/work"}>Work</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/resume"}>Resume</Link>
      </nav>
      <ThemeToggle />
    </div>
  );
}
