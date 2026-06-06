"use client";

import { ProjectRowCard } from "./project-row-card";

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
      bullets: ["Reusable primitives", "Template-driven workflows", "Fast theming"],
    },
    {
      id: 2,
      title: "Esperanza",
      description:
        "A digital affiliate platform built to help creators scale influence and track measurable outcomes.",
      detail:
        "Designed around campaign visibility, content partnerships, and reliable payout flows so creators and operators can keep the platform easy to understand while it handles real volume.",
      category: "Affiliate Platform",
      tags: ["Next.js", "Docker", "PostgreSQL", "TypeScript", "Node.js"],
      link: "https://esperanza.et",
      bullets: ["Campaign tracking", "Containerized deployment", "Payment-ready"],
    },
    {
      id: 3,
      title: "HooraFilx",
      description:
        "A streaming platform for movies, TV shows, and documentaries from around the world.",
      detail:
        "Built to support content discovery, playback, and catalogue management with an experience that stays fast even as the library grows.",
      category: "Entertainment",
      tags: ["React", "Nest.js", "PostgreSQL", "Redis", "TypeScript"],
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
      tags: ["Next.js", "Nest.js", "Redis", "TypeScript", "PostgreSQL"],
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
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
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
      bullets: ["Listings and applications", "Employer profiles", "Searchable marketplace"],
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-transparent text-[#e0e0e0] font-mono py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 mb-5">
            <span className="text-[9px] text-white/30 font-bold mr-3 tracking-widest">05</span>
            <span className="text-[9px] text-white/60 font-bold tracking-widest border-l border-white/[0.08] pl-3 uppercase">
              Projects
            </span>
          </div>

          <h2
            className="text-[2rem] font-bold leading-[1.1] text-white sm:text-[2.8rem] md:text-[3.2rem]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PROJECTS
          </h2>
        </div>

        {/* Project rows */}
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-sm overflow-hidden">
          {projects.map((project, index) => (
            <ProjectRowCard
              key={project.id}
              project={project}
              defaultExpanded={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;