import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SocialButtonsProps = {
  github?: string;
  twitter?: string;
  linkedin?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const IconGithub = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.25 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z" />
  </svg>
);

const IconTwitter = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
    <path d="M23 4.56c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37c-.83.5-1.75.86-2.72 1.05A4.28 4.28 0 0016.11 3c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99-3.56-.18-6.72-1.88-8.84-4.47-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.79 1.89 3.56-.7-.02-1.36-.21-1.94-.53v.05c0 2.06 1.46 3.78 3.4 4.17-.36.1-.74.16-1.13.16-.28 0-.55-.03-.81-.08.55 1.7 2.15 2.94 4.04 2.98A8.6 8.6 0 012 19.54a12.12 12.12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.57-1.34 2.15-2.19z" />
  </svg>
);

const IconLinkedIn = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
    <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.6 8.58 21 11 21 13.9V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V21H9V9z" />
  </svg>
);

export function SocialButtons({
  github = "https://github.com/your-username",
  twitter = "https://twitter.com/your-handle",
  linkedin = "https://www.linkedin.com/in/your-profile",
  className,
  size = "lg",
}: SocialButtonsProps) {
  return (
    <div className={cn("flex gap-12 items-center", className)}>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="flex items-center justify-center rounded-full h-20 w-20 hover:scale-105 transform transition"
      >
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGithub className="size-custom w-14 h-14" />
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="flex items-center justify-center rounded-full h-20 w-20 hover:scale-105 transform transition"
      >
        <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <IconTwitter className="size-custom w-14 h-14" />
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="flex items-center justify-center rounded-full h-20 w-20 hover:scale-105 transform transition"
      >
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedIn className="size-custom w-14 h-14" />
        </a>
      </Button>
    </div>
  );
}

export default SocialButtons;
