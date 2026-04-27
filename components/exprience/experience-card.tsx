"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: string;
  color: string;
}

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}

export function ExperienceCard({
  experience,
  isExpanded,
  onToggle,
  isLast,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer border-b transition-colors duration-200",
        isLast ? "border-b-0" : "border-white/[0.06]",
        isExpanded ? "bg-white/[0.04]" : "hover:bg-white/[0.025]"
      )}
      onClick={onToggle}
    >
      {/* ── Header row ───────────────────────────────────────── */}
      <div className="flex items-center gap-5 px-6 py-6 sm:px-8 sm:py-7">
        {/* Icon bubble */}
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-xl transition-all duration-300",
            isExpanded
              ? "border-red-500/40 bg-red-500/10 scale-105"
              : "border-white/10 bg-white/[0.04]"
          )}
        >
          {experience.icon}
        </div>

        {/* Title + company */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className="text-base font-semibold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {experience.role}
            </h3>
            {/* Active indicator for current role */}
            {experience.id === 1 && (
              <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.25em] text-emerald-400">
                <span className="h-1 w-1 animate-pulse-dot rounded-full bg-emerald-400" />
                Current
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-white/45">{experience.company}</p>
        </div>

        {/* Period + chevron */}
        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-mono">
            {experience.period}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-white/25 transition-transform duration-300",
              isExpanded && "rotate-180 text-red-400"
            )}
          />
        </div>
      </div>

      {/* ── Expandable body ───────────────────────────────────── */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] px-6 pb-8 pt-6 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              {/* Left: description + achievements */}
              <div className="space-y-6">
                <p className="text-sm leading-[1.85] text-white/55">
                  {experience.description}
                </p>

                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {experience.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: tech stack */}
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Collapsed preview ─────────────────────────────────── */}
      {!isExpanded && (
        <p className="line-clamp-1 px-6 pb-5 text-sm text-white/30 sm:px-8">
          {experience.description}
        </p>
      )}
    </div>
  );
}
