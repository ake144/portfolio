"use client";

import { useState } from "react";
import { ExperienceCard } from "./experience-card";

const experiences = [
  {
    id: 1,
    company: "Safaricom Ethiopia",
    role: "Frontend Engineer",
    period: "2025 – Present",
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
    period: "2023 – 2025",
    description:
      "Built and shipped multiple product features from concept to production, directly contributed to 10× user growth.",
    highlights: ["Product Development", "User Experience", "Technical Excellence"],
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Next.js", "TypeScript", "NestJS"],
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    company: "Marvels Creative Technology",
    role: "Frontend Developer",
    period: "2024 – 2025",
    description:
      "As an intern developer, contributed to a job-hunting platform admin dashboard, UI/UX implementation, and performance improvements.",
    highlights: ["UI/UX Implementation", "Performance", "Client Management"],
    tags: ["React", "Tailwind CSS", "Figma", "JavaScript", "Zustand"],
    icon: "🎨",
    color: "from-emerald-500 to-teal-500",
  },
];

export function ExperienceShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="section-card overflow-hidden">
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
  );
}
