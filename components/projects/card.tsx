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
  link?: string
  color: string
  icon: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <div className="flex flex-col h-full p-8 sm:p-10 transition-colors hover:bg-neutral-900/50">
        {/* Top Section: Icon & Category */}
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl">{project.icon}</div>
          <div className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            {project.category}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border-none">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer: Link */}
        <div className="flex items-center justify-between text-sm text-neutral-500 pt-6 border-t border-neutral-800 mt-auto">
          <span className="flex items-center gap-2 group-hover:text-white transition-colors">
            View Project
          </span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:text-white" />
        </div>
      </div>
    </a>
  )
}
