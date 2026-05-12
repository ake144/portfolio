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
    <section id="projects" className="relative w-full bg-[#0c0c0c] text-[#e0e0e0] font-mono border-t border-[#222] py-20">
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
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="break-inside-avoid border border-[#222] bg-[#0c0c0c] group hover:border-[#444] transition-colors relative flex flex-col">
              {/* Card Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#222] bg-[#0a0a0a]">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                  <div className="w-1.5 h-1.5 border border-gray-600"></div>
                </div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                  SYS_{project.id.toString().padStart(2, '0')} // {project.title.replace(/\s+/g, "_")}
                </div>
              </div>

              {/* Card Body Placeholder / Concept Art */}
              <div className="relative w-full overflow-hidden bg-[#111] min-h-[280px] sm:min-h-[340px] flex flex-col items-center justify-center p-8 text-center group-hover:bg-[#161616] transition-colors">
                {/* Abstract pattern background based on icon */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="text-7xl mb-6 opacity-80 mix-blend-luminosity grayscale">{project.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-serif text-white opacity-20 uppercase tracking-tighter absolute bottom-1/2 translate-y-1/2 scale-150 rotate-[-5deg] pointer-events-none z-0 mix-blend-overlay">
                  {project.title.replace(/\s+/g, "_")}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed z-10 max-w-sm">
                  {project.description}
                </p>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 w-full h-full z-20"></Link>
                )}
              </div>

              {/* Card Footer */}
              <div className="p-6 border-t border-[#222] bg-[#0c0c0c]">
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 border border-[#333] text-[9px] uppercase tracking-widest text-[#a8e036]">
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