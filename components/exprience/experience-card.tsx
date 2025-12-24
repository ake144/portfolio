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
    <div className="flex md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 justify-center items-start">
      {/* Date Column - Left Side */}
      <div className="hidden md:block text-right pt-6 pr-4">
        <span className="text-sm font-medium text-muted-foreground/60 font-mono">
          {experience.period}
        </span>
      </div>

      {/* Timeline Column - Center */}
      <div className="relative flex flex-col items-center h-full">
        {/* Dot */}
        <div className={cn(
            "w-3 h-3 rounded-full z-10 mt-7 ring-4 ring-background transition-all duration-300",
            isExpanded ? "bg-muted-foreground/90 scale-110" : "bg-muted-foreground/30 group-hover:bg-blue-500/50"
        )} />
        
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-7 bottom-[-3rem] w-px border-l border-dashed border-border/30" />
        )}
      </div>

      {/* Content Column - Right Side */}
      <div className="pb-12 pt-2 group w-full max-w-xl">
        {/* Mobile Date */}
        <div className="md:hidden mb-2 flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span className="text-xs font-mono">{experience.period}</span>
        </div>

        <div
          onClick={onToggle}
          className={cn(
            "cursor-pointer relative overflow-hidden rounded-xl border border-border/40 bg-card/20 p-5 transition-all duration-300",
            "hover:bg-card/40 hover:border-card/80 hover:shadow-lg hover:shadow-gray-500/5",
            isExpanded && "bg-card/40 border-gray-500/30 ring-1 ring-gray-500/20"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                {experience.role}
              </h3>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
            </div>
            <ChevronRight
              className={cn(
                "w-5 h-5 text-muted-foreground/50 transition-transform duration-300",
                isExpanded && "rotate-90 "
              )}
            />
          </div>

          <div className={cn(
              "grid transition-all duration-300 ease-in-out",
              isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="overflow-hidden">
                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                    {experience.description}
                </p>

                <div className="space-y-5">
                    {/* Highlights */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 mb-3">
                            Key Achievements
                        </h4>
                        <ul className="space-y-2.5">
                            {experience.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground/80 flex items-start gap-2.5">
                                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-2 shrink-0" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 mb-3">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {experience.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] px-2 py-0.5 bg-blue-500/5 text-blue-400/80 border border-blue-500/10 rounded-md font-medium"
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
             <p className="mt-3 text-sm text-muted-foreground/50 line-clamp-2">
                {experience.description}
             </p>
          )}
        </div>
      </div>
    </div>
  )
}
