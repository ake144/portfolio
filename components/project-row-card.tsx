"use client";

import { useState } from "react";
import { ArrowUpRight, Bookmark, ChevronDown } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  detail: string;
  category: string;
  tags: string[];
  link?: string;
  bullets: string[];
}

interface ProjectCardProps {
  project: Project;
  defaultExpanded?: boolean;
}

export function ProjectRowCard({ project, defaultExpanded = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="group border-b border-white/[0.06] last:border-b-0">
      {/* Main row */}
      <div
        className="relative flex cursor-pointer items-start gap-4 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:items-center sm:gap-6 sm:px-6 md:gap-8 md:px-8"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Number */}
        <span
          className="min-w-[48px] select-none text-[2.8rem] font-bold leading-none tracking-[-0.06em] text-white/[0.07] transition-colors duration-300 group-hover:text-white/[0.14] sm:min-w-[64px] sm:text-[3.4rem]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Category */}
        <div className="hidden min-w-[110px] flex-col gap-0.5 pt-1 sm:flex md:min-w-[140px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/25">
            {project.category}
          </p>
        </div>

        {/* Title + Tags + Description */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h3
              className="text-[0.95rem] font-semibold leading-tight text-white sm:text-[1.1rem]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h3>

            {/* Tags - inline with title */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[8px] uppercase tracking-[0.15em] text-white/35 transition-colors duration-200 group-hover:border-white/[0.1] group-hover:text-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/30 sm:text-xs sm:max-w-2xl">
            {project.description}
          </p>

          {/* Mobile category */}
          <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.35em] text-white/20 sm:hidden">
            {project.category}
          </p>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 pt-1 sm:gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-md text-white/25 transition-all duration-200 hover:bg-white/[0.06] hover:text-white/60"
              aria-label="Open project"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-md text-white/25 transition-all duration-200 hover:bg-white/[0.06] hover:text-white/60"
            aria-label="Bookmark"
          >
            <Bookmark className="h-3.5 w-3.5" />
          </button>
          <ChevronDown
            className={`h-3.5 w-3.5 text-white/20 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Expanded detail panel */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: expanded ? "320px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="mx-4 mb-5 rounded-lg border border-white/[0.05] bg-white/[0.015] px-5 py-5 sm:mx-6 sm:px-7 sm:py-6 md:mx-8">
          {/* Sub-header */}
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-white/20">
            Technical deep dive
          </p>

          <p className="max-w-3xl text-[12px] leading-[1.8] text-white/45 sm:text-[13px]">
            {project.detail}
          </p>

          {/* Highlights */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.bullets.map((bullet) => (
              <span
                key={bullet}
                className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[8px] uppercase tracking-[0.18em] text-white/35"
              >
                {bullet}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors duration-200 hover:text-white/70"
            >
              Open project
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}