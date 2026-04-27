"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link?: string;
  color: string;
  icon: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <div className="group flex h-full flex-col overflow-hidden transition-all duration-500">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-black/40 px-6 py-3.5">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
          SYS://PROJECT
        </p>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500/80">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Visual area */}
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-gradient-to-br",
          project.color
        )}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,transparent_40%,transparent_60%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Category badge */}
        <div className="absolute left-6 top-6 rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
          {project.category}
        </div>

        {/* Icon & Arrow */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <div className="text-white">
            <p className="text-5xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
              {project.icon}
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-red-500/50 group-hover:bg-red-500/20">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Info area */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="flex-1 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-red-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
            Code
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-[1.8] text-white/50">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors group-hover:text-white/60">
          <span>Explore details</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return <article className="block h-full">{content}</article>;
}
