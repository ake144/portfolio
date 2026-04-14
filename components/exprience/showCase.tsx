"use client"

import { useState } from "react"
import { ExperienceCard } from "./experience-card"

const experiences = [
  {
    id: 1,
    company: "Safaricom Ethiopia",
    role: "Frontend Engineer",
    period: "2025 - Present",
    description:
      "Part of the core team developing and maintaining the Safaricom Ethiopia web platform, focusing on delivering seamless user experiences.",
    highlights: ["M-Pesa Integration", "Architecture", "Performance Optimization"],
    tags: ["Docker", "Jenkins", "GitLab CI/CD", "Kubernetes", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    icon: "💼",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    company: "SRE Technologies",
    role: "Full Stack Engineer",
    period: "2023 - 2025",
    description:
      "Built and shipped multiple product features from concept to production, directly contributed to 10x user growth.",
    highlights: ["Product Development", "User Experience", "Technical Excellence"],
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Next.js", "TypeScript", "NestJS"],
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    company: "Marvels Creative Technology",
    role: "Frontend Developer",
    period: "2024 - 2025",
    description:
      "As an Intern developer, contributed to job hunting platform admin dashboard, and UI/UX implementation and performance improvements.",
    highlights: ["UI/UX Implementation", "Performance", "Client Management"],
    tags: ["React", "Tailwind CSS", "Figma", "JavaScript", "zustand"],
    icon: "🎨",
    color: "from-emerald-500 to-teal-500",
  },
]

export function ExperienceShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 space-y-4 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
            Experience
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
            A career timeline built around shipping, learning, and execution.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Selected roles that shaped how I think about product quality, delivery, and collaboration.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isExpanded={expandedId === exp.id}
              onToggle={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
