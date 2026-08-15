import { ProjectCard, type Project } from "./projects/project-card";

const projects: Project[] = [

  {
    id: 1,
    title: "E-Commerce Platform",
    description: "An e-commerce admin platform for products, orders, and customer management.",
    detail:
      "Built for operators who need reliable control over inventory, orders, and reporting while keeping the day-to-day interface compact and usable.",
    category: "Commerce",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://store.biyxy.com/",
    bullets: ["Order management", "Inventory visibility", "Operator-first dashboard"],
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
    link: "https://affiliate.biyxy.com/",
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
    description: "Student management system for universities and colleges.",
    detail:
      "Created to help academic staff manage admissions, registrations, student records, and ongoing campus operations from one control surface.",
    category: "Enterprise",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    bullets: ["Admin workflows", "Academic records", "Enterprise dashboards"],
  },
  {
    id: 5,
    title: "E-learning Platform",
    description: "E-learning platform for courses, tutorials, and certifications.",
    detail:
      "Focuses on structured learning journeys, course delivery, and smooth content consumption for learners across devices.",
    category: "Education",
    tags: ["Next.js", "Nest.js", "Redis", "TypeScript", "PostgreSQL"],
    link: "https://globalpathway.esperanza.et/",
    bullets: ["Learning paths", "Course delivery", "Certification-ready flows"],
  },
    {
    id: 6,
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
    id: 7,
    title: "Job Board Platform",
    description: "Job board platform connecting job seekers with employers.",
    detail:
      "A structured marketplace for listings, applications, and employer profiles with the kind of browsing flow that keeps recruitment simple.",
    category: "Job Board",
    tags: ["Next.js", "Redux", "Node.js", "PostgreSQL"],
    bullets: ["Listings and applications", "Employer profiles", "Searchable marketplace"],
  },
];

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative w-full border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">
              <span>02</span>Projects
            </p>
            <h2 className="section-heading">Selected work.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            A curated set of products shipped across fintech, education, entertainment, and
            commerce — from open-source tooling to systems running in production today.
          </p>
        </div>

        {/* Featured + grid */}
        <div className="grid grid-cols-1 gap-4">
          <ProjectCard project={featured} featured />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
