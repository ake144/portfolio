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
    <section id="projects" className="relative w-full bg-transparent text-[#e0e0e0] font-mono py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-16">
          <div className="inline-flex items-center border border-[#333] bg-[#0a0a0a] px-3 py-1.5 mb-8">
            <span className="text-[10px] text-gray-400 font-bold mr-3 tracking-widest">05</span>
            <span className="text-[10px] text-white font-bold tracking-widest border-l border-[#333] pl-3 uppercase">PROJECTS</span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-serif text-white mb-6">
            Things I have put my effort in and pushed my limits.
          </h3>
          
          <p className="text-sm font-mono text-gray-400 max-w-3xl leading-relaxed">
            I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#222]">
          {projects.map((project) => (
            <div key={project.id} className="border-r border-b border-[#222] p-8 lg:p-12 hover:bg-[#080808] transition-colors group flex flex-col">
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-[#333] bg-[#111] flex items-center justify-center mb-8 text-[#a882ff] text-xl group-hover:border-[#555] transition-colors">
                {project.icon}
              </div>

              {/* Title & Desc */}
              <h4 className="text-[13px] text-white font-bold uppercase tracking-widest mb-3">
                {project.title.replace(/\s+/g, "_")}
              </h4>
              <p className="text-xs text-gray-400 font-mono leading-relaxed mb-8 max-w-md flex-1">
                {project.description}
              </p>

              {/* Links */}
              <div className="mb-10 mt-auto">
                {project.link ? (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#a882ff] uppercase tracking-widest transition-colors">
                    <span className="text-base leading-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span> {project.title}
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-widest">
                    <span>↗</span> PRIVATE_REPO
                  </span>
                )}
              </div>

              {/* Tech Stack Tags as subtle icons/text */}
              <div className="flex flex-wrap gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 opacity-60">
                    <span className="opacity-50">⟨⟩</span> {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;