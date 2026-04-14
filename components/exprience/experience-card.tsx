"use client"

import React from "react"
import { ChevronRight, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
  icon: string
  color: string
}

interface ExperienceCardProps {
  experience: Experience
  isExpanded: boolean
  onToggle: () => void
  isLast: boolean
}

export function ExperienceCard({ experience, isExpanded, onToggle, isLast }: ExperienceCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
      {/* Date Column - Left Side */}
      <div className="hidden pt-7 pr-4 text-right md:block">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/35 font-mono">
          {experience.period}
        </span>
      </div>

      {/* Timeline Column - Center */}
      <div className="relative flex flex-col items-center h-full">
        {/* Dot */}
        <div className={cn(
            "mt-8 h-3 w-3 rounded-full z-10 ring-4 ring-black transition-all duration-300",
            isExpanded ? "bg-red-400 scale-110" : "bg-white/25 group-hover:bg-red-400/80"
        )} />
        
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-7 bottom-[-3rem] w-px border-l border-dashed border-white/10" />
        )}
      </div>

      {/* Content Column - Right Side */}
      <div className="group w-full max-w-2xl pb-12 pt-2">
        {/* Mobile Date */}
        <div className="mb-2 flex items-center gap-2 text-white/45 md:hidden">
            <Calendar className="w-3 h-3" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono">{experience.period}</span>
        </div>

        <div
          onClick={onToggle}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/55 p-5 transition-all duration-300",
            "hover:border-red-500/40 hover:bg-black/75 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
            isExpanded && "border-red-500/40 bg-black/80 ring-1 ring-red-500/20"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                {experience.role}
              </h3>
              <p className="text-sm text-white/55">{experience.company}</p>
            </div>
            <ChevronRight
              className={cn(
                "h-5 w-5 text-white/35 transition-transform duration-300",
                isExpanded && "rotate-90 text-red-400"
              )}
            />
          </div>

          <div className={cn(
              "grid transition-all duration-300 ease-in-out",
              isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="overflow-hidden">
              <p className="mb-6 text-sm leading-7 text-white/65">
                    {experience.description}
                </p>

                <div className="space-y-5">
                    {/* Highlights */}
                    <div>
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                            Key Achievements
                        </h4>
                        <ul className="space-y-2.5">
                            {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {experience.tags.map((tag) => (
                                <span
                                    key={tag}
                        className="rounded-none border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Preview Text when collapsed */}
          {!isExpanded && (
             <p className="mt-3 line-clamp-2 text-sm text-white/45">
                {experience.description}
             </p>
          )}
        </div>
      </div>
    </div>
  )
}
