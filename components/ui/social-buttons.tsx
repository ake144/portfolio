"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";

type SocialButtonsProps = {
  github?: string;
  twitter?: string;
  linkedin?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function SocialButtons({
  github = "https://github.com/ake144",
  twitter = "https://x.com/AkeTamirat94397",
  linkedin = "https://www.linkedin.com/in/akeja/",
  className,
  size = "md",
}: SocialButtonsProps) {
  const socials = [
    { icon: Github, href: github, label: "GitHub" },
    { icon: Twitter, href: twitter, label: "Twitter" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn" },
  ];

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:-translate-y-1",
            sizeClasses[size]
          )}
        >
          <Icon className={iconSizes[size]} />
        </a>
      ))}
    </div>
  );
}

export default SocialButtons;
