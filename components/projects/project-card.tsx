import { ArrowUpRight, Lock } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  detail: string;
  category: string;
  tags: string[];
  link?: string;
  bullets: string[];
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

/** Deterministic abstract header art — no screenshots needed, just the grid/glow
 * motifs already used across the site, recombined per-card so the grid doesn't
 * feel repetitive while staying on the single accent color. */
function CardArt({ index, featured }: { index: number; featured?: boolean }) {
  const variant = index % 3;
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-1">
      <div
        className={
          variant === 0 ? "dot-grid absolute inset-0 opacity-[0.16]" : variant === 1 ? "line-grid absolute inset-0 opacity-[0.08]" : "absolute inset-0 opacity-[0.1]"
        }
        style={
          variant === 2
            ? {
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 14px)",
              }
            : undefined
        }
      />
      <div
        className={
          variant === 0
            ? "absolute -left-10 -top-10 h-48 w-48 rounded-full bg-primary/25 blur-[70px]"
            : variant === 1
              ? "absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-primary/25 blur-[80px]"
              : "absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
        }
      />
      <span
        className={`pointer-events-none absolute select-none font-display font-bold leading-none text-white/6 ${
          featured ? "-bottom-8 right-2 text-[10rem]" : "-bottom-4 right-1 text-8xl"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const index = project.id - 1;
  const className = `card-interactive group flex overflow-hidden ${
    featured ? "flex-col lg:flex-row" : "flex-col"
  }`;

  const body = (
    <>
      {/* Visual header */}
      <div className={featured ? "h-48 shrink-0 lg:h-auto lg:w-[42%]" : "h-40 shrink-0"}>
        <CardArt index={index} featured={featured} />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-8" : ""}`}>
        <div className="mb-3 flex items-start justify-between gap-3">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
            {project.category}
          </p>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${
              project.link
                ? "border-border text-white/30 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
                : "border-border text-white/15"
            }`}
          >
            {project.link ? (
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : (
              <Lock className="h-3 w-3" />
            )}
          </span>
        </div>

        <h3
          className={`font-display font-semibold leading-tight text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p className={`mt-3 leading-relaxed text-white/45 ${featured ? "text-sm sm:text-[15px]" : "text-[13px]"}`}>
          {featured ? project.detail : project.description}
        </p>

        {featured && project.bullets.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-md border border-border bg-white/2 px-3 py-2 text-[11px] leading-snug text-white/50"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tags.slice(0, featured ? project.tags.length : 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}
