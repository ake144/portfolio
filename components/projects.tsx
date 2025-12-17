"use client"

import { useState } from "react"
import { ProjectCard } from "./projects/card"

const Projects = () => {
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
    {
      id:4,
      title:"Job Board Platform",
      description:"A job board platform for connecting job seekers with employers. Features job listings, applications, and employer profiles.",
      category:"Job Board",
      tags:["Next.js", "Redux", "Node.js", "PostgreSQL"],
      color:"from-green-500 to-teal-500",
      icon:"💼",
    }
  ]

  return (
    <div className="relative z-10 w-full max-w-7xl border border-neutral-800 bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
        {projects.map((project) => (
          <div className="bg-black h-full" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects