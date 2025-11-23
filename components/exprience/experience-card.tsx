"use client"

import { ChevronDown } from "lucide-react"

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
  isFirst: boolean
  isLast: boolean
}

export function ExperienceCard({ experience, isExpanded, onToggle, isFirst, isLast }: ExperienceCardProps) {
  return (
    <div className="relative group ">
      {/* Vertical connecting line */}
      <div className="absolute -left-10 top-16 bottom-0 w-0.5 " />

      {/* Timeline dot */}
      <div className="absolute -left-14 top-6 w-8 h-8 rounded-full bg-card border-2 border-accent flex items-center justify-center text-sm font-bold text-accent group-hover:scale-125 transition-transform duration-300">
        {experience.icon}
      </div>

      {/* Card */}
      <div
        onClick={onToggle}
        className="cursor-pointer  hover:bg-card border border-border/50 hover:border-accent/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                {experience.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{experience.company}</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{experience.description}</p>

        {/* Expandable content */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-border/50">
            <p className="text-sm text-foreground">{experience.description}</p>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tags preview */}
        {!isExpanded && (
          <div className="flex flex-wrap gap-2">
            {experience.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium">
                {tag}
              </span>
            ))}
            {experience.tags.length > 3 && (
              <span className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full">
                +{experience.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
