import Image from "next/image";
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
  /** Path under /public (e.g. "/projects/ecommerce.jpg"). Falls back to the
   * generated CardArt below when omitted, so the grid never shows a broken
   * image while screenshots are still being collected. */
  image?: string;
  imageAlt?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function domainFromLink(link?: string): string | null {
  if (!link) return null;
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** Deterministic abstract header art — the fallback for projects that don't
 * have a screenshot yet, built from the grid/glow motifs already used across
 * the site, recombined per-card so the grid doesn't feel repetitive. */
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

function CardVisual({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  if (!project.image) {
    return <CardArt index={index} featured={featured} />;
  }

  const label = domainFromLink(project.link) ?? project.category;

  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-1">
      <Image
        src={project.image}
        alt={project.imageAlt ?? `${project.title} preview`}
        fill
        sizes={featured ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-1 via-black/5 to-black/25" />
      <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/50 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white/75 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const index = project.id - 1;
  const className = `card-interactive group relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/7 to-white/3 backdrop-blur-sm transition-all duration-500 flex ${
    featured ? "flex-col lg:flex-row hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20" : "flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/15"
  }`;

  const body = (
    <>
      {/* Visual header */}
      <div className={featured ? "relative h-56 shrink-0 lg:h-auto lg:w-[45%]" : "relative h-44 shrink-0 overflow-hidden"}>
        <CardVisual project={project} index={index} featured={featured} />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-8" : "p-6"}`}>
        {/* Header row */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-widest text-primary/75">
              {project.category}
            </p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
              project.link
                ? "border-white/15 text-white/40 group-hover:border-primary/60 group-hover:bg-primary/15 group-hover:text-primary"
                : "border-white/10 text-white/20"
            }`}
            aria-label={project.link ? `Visit ${project.title}` : "Not available"}
          >
            {project.link ? (
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : (
              <Lock className="h-3.5 w-3.5" />
            )}
          </a>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold leading-tight text-white ${
            featured ? "text-2xl sm:text-3xl mb-3" : "text-lg mb-2"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className={`leading-relaxed text-white/55 ${featured ? "text-[15px] mb-5" : "text-sm mb-3"}`}>
          {featured ? project.detail : project.description}
        </p>

        {/* Bullets for featured */}
        {featured && project.bullets.length > 0 && (
          <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {project.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] leading-snug text-white/50 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/8 group-hover:text-white/70"
              >
                {bullet}
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.slice(0, featured ? project.tags.length : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 font-mono text-xs font-medium text-primary/80 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/12"
            >
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
