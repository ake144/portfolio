"use client"

import { ProjectCard } from "./projects/card"

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "UIForest",
      description: "Opensource Design system, UI component library and template solution based on tailwindcss and shadcn",
      category: "Design System",
      tags: ["React", "TypeScript", "Tailwind", "shadcn"],
      link: "https://uiforest.dev",
      color: "from-purple-500 to-indigo-500",
      icon: "🎨",
    },
    {
      id:2,
      title:"Esperanza",
      description:"A powerful digital affiliate platform built to help influencer scale their influence, multiply opportunities, and convert passion into measurable success.",
      category:"Affiliate Marketing",
      tags:["Next.js", "Docker", "Docker Compose", "PostgreSQL", "TypeScript", "Node.js","Vps"],
      color:"from-yellow-500 to-orange-500",
      icon:"📈",
      link: "https://esperanza.et",

    },
    {
      id: 3,
      title:"HooraFilx",
      description:"A streaming platform that offers a wide variety of movies, TV shows, and documentaries from around the world.",
      category:"Entertainment",
      tags:["React","Nest.js", "PostgreSQL", "Redis", "TypeScript", "Docker Compose", "MongoDB"],
      color:"from-red-500 to-pink-500",
      icon:"🩺",
      link: "https://hoorafilx.com/",
    },
    {
      id: 4,
      title: "School Portal",
      description: "A complete student management system for university and colleges to manage their students and academic activities.",
      category: "Enterprise",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💬",
    },
     {
      id: 5,
      title: "E-learning Platform",
      description: "A complete e-learning platform for online courses, tutorials, and certifications.",
      category: "Education",
      tags: ["Next.js", "Nest.js","Redis", "TypeScript", "Node.js", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💬",
      link:"https://globalpathway.esperanza.et/",
    },

    {
      id: 6,
      title: "E-Commerce Platform",
      description: "An E-commerce admin dashboard and platform for managing products, orders, and customers. Used by over 5000+ users worldwide.",
      category: "Streaming",
      tags: ["Next.js", "TypeScript", "Tanstack Query", "PostgreSQL"],
      color: "from-red-500 to-pink-500",
      icon: "🎥",
    },
    {
      id: 7,
      title:"Job Board Platform",
      description:"A job board platform for connecting job seekers with employers. Features job listings, applications, and employer profiles.",
      category:"Job Board",
      tags:["Next.js", "Redux", "Node.js", "PostgreSQL"],
      color:"from-green-500 to-teal-500",
      icon:"💼",
    }
  ]

  return (
    <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
      <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div className="h-full bg-black/70" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects