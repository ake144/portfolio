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
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
           <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Experience
            </p>
          <h2 className="text-3xl mt-9 sm:mt-10 sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Career Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto sm:mx-0">
            A timeline of my professional growth and the amazing teams I&apos;ve worked with
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isExpanded={expandedId === exp.id}
              onToggle={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              isFirst={index === 0}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
