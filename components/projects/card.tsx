"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  link: string
  color: string
  icon: string
}

interface ProjectCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export function ProjectCard({ project, isHovered, onHoverChange }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => onHoverChange(true)} onMouseLeave={() => onHoverChange(false)}>
      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-lg border border-border/50  transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-accent/20">
        {/* Top Accent Bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col h-full">
          {/* Icon and Title */}
          <div className="mb-4">
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {project.category}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Link Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium   transition-colors group/link"
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>

        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}
