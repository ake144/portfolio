"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  detail: string;
  category: string;
  tags: string[];
  link?: string;
  icon: string;
  bullets: string[];
}

interface ProjectCardProps {
  project: Project;
}

function ProjectRowContent({ project }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-black/25 transition-all duration-500 hover:bg-white/4.5">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="grid gap-5 px-5 py-5 sm:px-6 sm:py-6 md:grid-cols-[72px_160px_minmax(0,1fr)_72px] md:gap-6 md:px-7 md:py-6">
        <div className="flex items-start gap-4 md:items-center md:gap-5">
          <span className="text-[2.9rem] font-semibold leading-none tracking-[-0.08em] text-white/8 transition-colors duration-500 group-hover:text-white/14 sm:text-[3.4rem]">
            {String(project.id).padStart(2, "0")}
          </span>
          <div className="hidden h-14 w-px bg-white/10 md:block" />
        </div>

        <div className="space-y-2 pt-1 md:pt-2">
          <p className="text-[10px] uppercase tracking-[0.42em] text-white/35">
            {project.category}
          </p>
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/20">
            {project.link ? "Live product" : "Selected build"}
          </p>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className="text-[1.55rem] font-semibold leading-none text-white transition-colors duration-300 group-hover:text-white/95 sm:text-[1.8rem]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h3>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/4 text-sm transition-all duration-300 group-hover:border-white/18 group-hover:bg-white/8">
              {project.icon}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-white/50 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 sm:text-[0.95rem]">
            {project.description}
          </p>
        </div>

        <div className="flex items-start justify-end pt-1 md:pt-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/20 group-hover:bg-white/8 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="max-h-none border-t border-white/10 bg-white/3 px-5 py-5 opacity-100 transition-all duration-500 md:max-h-0 md:overflow-hidden md:px-7 md:py-0 md:opacity-0 md:group-hover:max-h-56 md:group-hover:py-6 md:group-hover:opacity-100">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Technical deep dive
            </p>
            <p className="mt-3 text-sm leading-7 text-white/66 sm:text-[0.95rem]">
              {project.detail}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Highlights
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/58"
                >
                  {bullet}
                </span>
              ))}
            </div>

            {project.link ? (
              <span className="mt-4 inline-flex items-center gap-2 border border-white/12 bg-white/3 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 transition-all duration-300 group-hover:border-white/22 group-hover:bg-white/7 group-hover:text-white">
                Open project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20")}
      >
        <ProjectRowContent project={project} />
      </a>
    );
  }

  return (
    <article className="group block">
      <ProjectRowContent project={project} />
    </article>
  );
}