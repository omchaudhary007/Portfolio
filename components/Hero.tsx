"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import SocialLink from "./SocialLink";
import Image from "next/image";

export default function Hero() {
  const [copied, setCopied] = useState<boolean>(false);
  const isMobile = useIsMobile();

  async function handleCopy() {
    if (copied) return;
    await navigator.clipboard.writeText("omchaudhary0730@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="py-6 px-0.5">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-24 h-24 rounded-full shadow-sm shadow-muted/20"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl opacity-90">Om Chaudhary</h1>
          <div className="flex items-center gap-2 text-sm">
            <p className="opacity-70">Engineer.</p>
            <div
              onClick={handleCopy}
              className="cursor-pointer flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-all duration-150 group"
            >
              <span>{isMobile ? "Email" : "omchaudhary0730@gmail.com"}</span>
              <div
                className={`transition-all duration-500 ${!copied ? "group-active:scale-0" : ""}`}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 opacity-75 text-start">
        I enjoy building software that solves real problems. I have experience
        with full-stack applications using TypeScript, Node.js, React, and
        Next.js.
      </p>
      <SocialLink iconStyle="size-5 opacity-70" />
    </main>
  );
}
