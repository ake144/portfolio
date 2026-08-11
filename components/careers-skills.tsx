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
    <section id="experience" className="relative w-full border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-14 sm:mb-16">
          <span>03</span>Experience &amp; skills
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Experience column */}
          <div>
            <h2 className="mb-10 font-display text-3xl font-semibold text-white sm:text-4xl">Career</h2>

            <div className="flex flex-col border-t border-border">
              {experiences.map((exp) => (
                <div key={exp.id} className="group border-b border-border py-7">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="mb-1.5 flex items-center gap-2.5">
                        {exp.current && (
                          <span className="relative flex h-1.5 w-1.5 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                        @ {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/45">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="tag-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills column */}
          <div>
            <h2 className="mb-10 font-display text-3xl font-semibold text-white sm:text-4xl">Skills</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="card-interactive flex items-center gap-3.5 px-4 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-white/3 text-primary/80">
                    <skill.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold tracking-wide text-white/85">{skill.name}</span>
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
