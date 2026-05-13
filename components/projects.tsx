"use client";

import Link from "next/link";

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
      tags: ["Next.js", "Docker", "PostgreSQL", "TypeScript", "Node.js"],
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
      tags: ["React", "Nest.js", "PostgreSQL", "Redis", "TypeScript"],
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
      tags: ["Next.js", "Nest.js", "Redis", "TypeScript", "PostgreSQL"],
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
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
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
    <section id="projects" className="relative w-full bg-transparent text-[#e0e0e0] font-mono border-t border-[#222] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mb-16">
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">
            HOME / PROJECTS
          </div>
          
          <h2 className="text-6xl sm:text-8xl lg:text-[9rem] font-serif text-white tracking-tight leading-[0.85] mb-8 uppercase">
            STRUCTURAL<br />
            <span className="text-gray-400">ARTISTRY.</span>
          </h2>
          
          <div className="border-t border-[#222] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-sm font-mono text-gray-400 max-w-2xl leading-relaxed">
              A curated collection of technical implementations and architectural explorations. 
              Filtering by complex frontend mechanics and generative design.
            </p>
            <div className="bg-[#111] border border-[#222] px-4 py-2 text-[10px] text-white font-bold tracking-widest">
              FILTER: ALL_SYSTEMS
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-[#222] bg-[#0c0c0c] hover:border-[#444] transition-colors relative flex flex-col">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#222] bg-[#0a0a0a]">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                </div>
                <div className="bg-[#1a1a1a] px-2 py-0.5 border border-[#333] text-[9px] text-[#a8e036] font-bold uppercase tracking-widest">
                  {project.id.toString().padStart(2, '0')} // {project.category.replace(/\s+/g, "_")}
                </div>
              </div>

              <div className="relative w-full overflow-hidden bg-[#111] h-[200px] flex flex-col items-center justify-center p-8 text-center transition-colors">
                <div className="text-[10px] text-gray-600 tracking-widest font-mono z-10 font-bold mix-blend-overlay">
                  3 0 0 × 3 0 0
                </div>
              </div>

              <div className="p-5 border-t border-[#222] bg-[#0c0c0c] flex flex-col flex-1">
                <h3 className="text-[13px] font-bold font-mono text-white mb-3 uppercase tracking-widest">
                  {project.title.replace(/\s+/g, "_")}
                </h3>
                <p className="text-gray-400 text-[11px] font-mono leading-relaxed mb-6 block h-auto flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 border border-[#333] text-[9px] text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Load More */}
        <div className="mt-20 border-t border-[#222] flex justify-center pt-16">
          <button className="border border-[#333] hover:border-white hover:bg-white hover:text-black transition-colors px-6 py-3 text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase flex items-center gap-3 bg-transparent">
            LOAD_MORE_RECORDS
            <span className="text-xs">⤓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;