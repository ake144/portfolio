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
        "group cursor-pointer transition-colors duration-200",
        isExpanded ? "bg-white/4" : "hover:bg-white/3"
      )}
      onClick={onToggle}
    >
      <div className="grid items-center gap-4 px-6 py-6 sm:px-8 sm:py-5 md:grid-cols-[72px_minmax(0,1fr)_160px]">
        {/* Left: period + index */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/28 font-mono">
            {experience.period}
          </span>
          <span className="text-2xl font-semibold text-white/6">{String(experience.id).padStart(2, "0")}</span>
        </div>

        {/* Main: role + company + short desc */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {experience.company}
            </h3>
            <p className="text-sm text-white/45">— {experience.role}</p>
          </div>

          <p className="mt-3 text-sm leading-[1.8] text-white/55 line-clamp-2">
            {experience.description}
          </p>
        </div>

        {/* Right: chevron */}
        <div className="flex flex-col items-end">
          <ChevronDown
            className={cn(
              "h-4 w-4 text-white/25 transition-transform duration-300",
              isExpanded && "rotate-180 text-red-400"
            )}
          />
        </div>
      </div>

      {/* Expanded area */}
      <div className={cn("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-6 pb-8 pt-4 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm leading-[1.85] text-white/60">{experience.description}</p>
              <div className="mt-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-white/30">Key achievements</p>
                <ul className="list-disc pl-5 space-y-2 text-white/60">
                  {experience.highlights.map((h, i) => (
                    <li key={i} className="text-sm">{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-white/30">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[12px] text-white/65 bg-white/3 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
