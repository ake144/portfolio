"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const content = (
    <div className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] shadow-[0_26px_70px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-1 hover:border-red-400/45 hover:shadow-[0_34px_95px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/35 px-5 py-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-white/50">SYS://PROJECT</p>
        <span className="text-[10px] uppercase tracking-[0.3em] text-red-300/85">{String(project.id).padStart(2, "0")}</span>
      </div>

      <div className={cn("relative aspect-16/10 overflow-hidden border-b border-white/10 bg-linear-to-br", project.color)}>
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.16)_0%,transparent_22%,transparent_76%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.28)_1px,transparent_1px)] bg-size-[28px_28px] opacity-45" />
        <div className="absolute left-5 top-5 border border-white/20 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.34em] text-white/85">
          {project.category}
        </div>
        <div className="absolute right-5 top-5 border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-white/70">
          LIVE
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <div className="max-w-[70%] text-white">
            <p className="text-5xl leading-none">{project.icon}</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-white/75">Production work</p>
          </div>
          <div className="border border-white/20 bg-white/10 p-2 text-white/90 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-red-300/80">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[75%] text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
          <span className="border border-white/10 bg-black/35 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/45">Code</span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="border border-white/10 bg-white/4 text-[10px] uppercase tracking-[0.25em] text-white/70 hover:border-red-400/40 hover:bg-white/8"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/50">
          <span>Open details</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-200" />
        </div>
      </div>
    </div>
  )

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
    )
  }

  return <article className="block h-full">{content}</article>
}
