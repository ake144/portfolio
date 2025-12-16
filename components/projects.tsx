"use client"

import { useState } from "react"
import { ProjectCard } from "./projects/card"

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "UIForest",
      description: "Opensource Design system, UI component library and template solution based on tailwindcss and shadcn",
      category: "Design System",
      tags: ["React", "TypeScript", "Tailwind", "shadcn"],
      link: "https://uiforest.dev",
      color: "from-purple-500 to-indigo-500",
      icon: "🎨",
    },
    {
      id: 2,
      title: "School Portal",
      description: "A complete student management system for university and colleges to manage their students and academic activities.",
      category: "Enterprise",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💬",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "An E-commerce admin dashboard and platform for managing products, orders, and customers. Used by over 5000+ users worldwide.",
      category: "Streaming",
      tags: ["Next.js", "TypeScript", "Tanstack Query", "PostgreSQL"],
      color: "from-red-500 to-pink-500",
      icon: "🎥",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left max-w-3xl">
           <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Projects
            </p>
          <h1 className="text-3xl mt-9 sm:mt-10 sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real World Projects I&apos;ve Worked On
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            I got an opportunity to work on several real-world projects that helped me enhance my skills and gain practical experience.
            I&apos;ve put my efforts into building projects that solve real problems and showcase my abilities as a developer and also as a contributor to open-source projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(isHovered) => setHoveredId(isHovered ? project.id : null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects