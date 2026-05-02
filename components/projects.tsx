"use client";

import { ProjectCard } from "./project-row-card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UIForest",
      description:
        "Open-source design system and component library built to speed up product delivery.",
      detail:
        "A reusable UI foundation with polished primitives, consistent spacing rules, and production-ready templates for teams that need to move quickly without losing visual control.",
      category: "Design System",
      tags: ["React", "TypeScript", "Tailwind", "shadcn"],
      link: "https://uiforest.dev",
      icon: "🎨",
      bullets: ["Reusable primitives", "Template-driven workflows", "Fast theming and composition"],
    },
    {
      id: 2,
      title: "Esperanza",
      description:
        "A digital affiliate platform built to help creators scale influence and track measurable outcomes.",
      detail:
        "Designed around campaign visibility, content partnerships, and reliable payout flows so creators and operators can keep the platform easy to understand while it handles real volume.",
      category: "Affiliate Marketing",
      tags: ["Next.js", "Docker", "Docker Compose", "PostgreSQL", "TypeScript", "Node.js", "Vps"],
      icon: "📈",
      link: "https://esperanza.et",
      bullets: ["Campaign tracking", "Containerized deployment", "Payment-ready data model"],
    },
    {
      id: 3,
      title: "HooraFilx",
      description:
        "A streaming platform for movies, TV shows, and documentaries from around the world.",
      detail:
        "Built to support content discovery, playback, and catalogue management with an experience that stays fast even as the library grows.",
      category: "Entertainment",
      tags: ["React", "Nest.js", "PostgreSQL", "Redis", "TypeScript", "Docker Compose", "MongoDB"],
      icon: "🎬",
      link: "https://hoorafilx.com/",
      bullets: ["Playback focused UX", "Cache-backed browsing", "Large catalogue support"],
    },
    {
      id: 4,
      title: "School Portal",
      description:
        "Student management system for universities and colleges.",
      detail:
        "Created to help academic staff manage admissions, registrations, student records, and ongoing campus operations from one control surface.",
      category: "Enterprise",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      icon: "🏫",
      bullets: ["Admin workflows", "Academic records", "Enterprise dashboards"],
    },
    {
      id: 5,
      title: "E-learning Platform",
      description:
        "E-learning platform for courses, tutorials, and certifications.",
      detail:
        "Focuses on structured learning journeys, course delivery, and smooth content consumption for learners across devices.",
      category: "Education",
      tags: ["Next.js", "Nest.js", "Redis", "TypeScript", "Node.js", "PostgreSQL"],
      icon: "📚",
      link: "https://globalpathway.esperanza.et/",
      bullets: ["Learning paths", "Course delivery", "Certification-ready flows"],
    },
    {
      id: 6,
      title: "E-Commerce Platform",
      description:
        "An e-commerce admin platform for products, orders, and customer management.",
      detail:
        "Built for operators who need reliable control over inventory, orders, and reporting while keeping the day-to-day interface compact and usable.",
      category: "Commerce",
      tags: ["Next.js", "TypeScript", "Tanstack Query", "PostgreSQL"],
      icon: "🛒",
      bullets: ["Order management", "Inventory visibility", "Operator-first dashboard"],
    },
    {
      id: 7,
      title: "Job Board Platform",
      description:
        "Job board platform connecting job seekers with employers.",
      detail:
        "A structured marketplace for listings, applications, and employer profiles with the kind of browsing flow that keeps recruitment simple.",
      category: "Job Board",
      tags: ["Next.js", "Redux", "Node.js", "PostgreSQL"],
      icon: "💼",
      bullets: ["Listings and applications", "Employer profiles", "Searchable marketplace"],
    },
  ];

  return (
    <section className="w-full py-10 sm:py-14">
      <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="accent-line">SYS://PROJECTS</p>
          <h2
            className="mt-4 text-balance text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 0.96,
            }}
          >
            Projects built like product systems.
          </h2>
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/35">
          {projects.length} entries
        </div>
      </div>

      <div className="section-card overflow-hidden">
        <div className="border-b border-white/10 bg-white/2 px-5 py-3 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            Hover a row to expand the technical deep dive
          </p>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;