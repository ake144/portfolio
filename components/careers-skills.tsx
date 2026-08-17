import {
  Bot,
  Braces,
  Cloud,
  Database,
  Layers,
  Network,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Safaricom Ethiopia",
    role: "Full-Stack & AI Engineer",
    period: "2025 — Present",
    current: true,
    description:
      "Building scalable fintech products on the Safaricom Ethiopia platform, integrating LLM-powered features alongside robust backend services.",
    highlights: ["M-Pesa integration", "LLM-powered features", "Backend architecture"],
  },
  {
    id: 2,
    company: "SRE Technologies",
    role: "Full Stack Engineer",
    period: "2023 — 2025",
    current: false,
    description:
      "Built and shipped multiple product features from concept to production, directly contributing to 10x user growth.",
    highlights: ["Product development", "User experience", "Technical excellence"],
  },
  {
    id: 3,
    company: "Marvels Creative Tech",
    role: "Frontend Developer",
    period: "2024 — 2025",
    current: false,
    description:
      "Contributed to a job-hunting platform admin dashboard — UI/UX implementation, performance improvements, and client management.",
    highlights: ["UI/UX implementation", "Performance", "Client management"],
  },
];

const skills: { name: string; icon: LucideIcon }[] = [
  { name: "TypeScript", icon: Braces },
  { name: "React / Next.js", icon: Layers },
  { name: "Node.js / FastAPI", icon: Server },
  { name: "LangChain / RAG", icon: Workflow },
  { name: "LLM Evaluation", icon: Bot },
  { name: "Agentic Workflows", icon: Network },
  { name: "PostgreSQL / VectorDB", icon: Database },
  { name: "Docker / AWS", icon: Cloud },
  { name: "Prompt Engineering", icon: Terminal },
  { name: "OpenAI / Anthropic", icon: Sparkles },
];

const CareersSkills = () => {
  return (
    <section id="experience" className="relative w-full border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-white/10 pb-10 sm:mb-20">
          <p className="eyebrow mb-6">
            <span>03</span>Experience &amp; skills
          </p>
          <h2 className="font-display text-5xl font-bold text-white sm:text-6xl">
            My journey & expertise.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Experience column */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-white">Career</h3>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group rounded-lg border border-white/10 bg-linear-to-br from-white/7 to-white/2 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        {exp.current && (
                          <span className="relative flex h-1.5 w-1.5 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                          </span>
                        )}
                        <h3 className="font-display text-base font-semibold text-white">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary/60">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 font-mono text-xs font-medium text-primary/80 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/12"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills column */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-white">Core Skills</h3>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/8 hover:shadow-md hover:shadow-primary/10 flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-primary/80 transition-colors group-hover:border-primary/40 group-hover:bg-primary/12">
                    <skill.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-white/85 transition-colors group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSkills;
