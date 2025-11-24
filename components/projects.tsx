"use client"

import { useState } from "react"

import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { ProjectCard } from "./projects/card";

const Projects=() => {
 const [hoveredId, setHoveredId] = useState<number | null>(null)

    const projects = [
  {
    id: 1,
    title: "FARMUI",
    description: "Opensource Design system, UI component library and template solution based on tailwindcss and shadcn",
    category: "Design System",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    link: "https://farmui.dev",
    color: "from-purple-500 to-indigo-500",
    icon: "🎨",
  },
  {
    id: 2,
    title: "MEGAMESS",
    description: "Opensource privacy first file sharing and analytics tools for companies and enterprise users.",
    category: "Enterprise",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://megamess.dev",
    color: "from-blue-500 to-cyan-500",
    icon: "💬",
  },
  {
    id: 3,
    title: "CHACHA",
    description: "Opensource multi tenant web streaming platform supporting most used protocol",
    category: "Streaming",
    tags: ["WebRTC", "Node.js", "React", "PostgreSQL"],
    link: "https://chacha.dev",
    color: "from-red-500 to-pink-500",
    icon: "🎥",
  },
  {
    id: 4,
    title: "MDJSONIFY",
    description: "An optimized - 3x Faster way of dumping your json compatible data from markdown data store.",
    category: "Developer Tool",
    tags: ["CLI", "Node.js", "TypeScript", "JSON"],
    link: "https://mdjsonify.dev",
    color: "from-slate-500 to-gray-600",
    icon: "⚡",
  },
]

    return (
              <div
                    className={cn(
                      "absolute inset-0 z-0 px-22 mx-76   h-[calc(120vh-10px)]",
                      "[background-size:100px_100px]",
                      
                      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                  >
                    <Spotlight
                        className="-top-40 left-0 md:-top-20 md:left-60"
                        fill="white"
                        />

                    <div className="flex justify-start items-start mt-32 max-w-2xl px-8">
                        <h1 className="text-5xl font-normal ">Real World Projects I've Worked On</h1>
                    </div>
                     <div className="mt-12 max-w-6xl mx-12 font-medium flex justify-center items-center ">
                       <p>I got an opportunity to work on several real-world projects that helped me enhance my skills and gain practical experience.
                         i've put my efforts into building projects that solve real problems and showcase my abilities as a developer and also as a contributor to open-source projects.
                       </p>

                     </div>

                     <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pl-8">
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

    )
}

export default Projects;