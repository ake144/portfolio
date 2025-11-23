import React from "react";
import Link from "next/link";

type Experience = {
    company: string;
    role: string;
    start: string;
    end?: string;
    logo?: string;
    bullets?: string[];
    url?: string;
    tech?: string[];
};

const defaultExperiences: Experience[] = [
    {
        company: "Safaricom Ethiopia",
        role: "Software Developer",
        start: "2023",
        end: "Present",
        url: "https://www.linkedin.com/company/african-fintech-hub/",
        bullets: [
            "Built scalable web applications with React and Next.js.",
            "Improved performance and accessibility across key fintech flows.",
            "Collaborated with product and design to ship user-facing features.",
        ],
        tech: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
        company: "Acme Labs",
        role: "Frontend Engineer",
        start: "2021",
        end: "2023",
        bullets: [
            "Modernized component library and QA workflows.",
            "Led UI improvements that increased engagement by 18%.",
        ],
        tech: ["React", "Tailwind", "Cypress"],
    },
    {
        company: "Open Source",
        role: "Contributor / Maintainer",
        start: "2019",
        end: "2021",
        bullets: ["Authored popular utilities used by 200+ projects."],
        tech: ["Node", "Python"],
    },
];

const ExprienceCard: React.FC<{ items?: Experience[] }> = ({
    items = defaultExperiences,
}) => {
    return (
        <section className="min-h-screen py-20   text-slate-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Experience
                    </h2>
                    <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
                        A selection of roles and projects where I built production
                        applications, led improvements, and shipped value to users.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((exp, idx) => (
                        <article
                            key={exp.company + idx}
                            className="relative rounded-2xl bg-linear-to-tr from-neutral-900/60 to-neutral-800/40 border border-neutral-700 p-6 shadow-lg hover:scale-[1.01] transition-transform"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {exp.role}
                                    </h3>
                                    <div className="mt-1 flex items-center gap-3 text-sm text-slate-300">
                                        {exp.url ? (
                                            <Link href={exp.url} className="underline">
                                                {exp.company}
                                            </Link>
                                        ) : (
                                            <span>{exp.company}</span>
                                        )}
                                        <span className="opacity-60">•</span>
                                        <span className="opacity-70">
                                            {exp.start}
                                            {exp.end ? ` — ${exp.end}` : ""}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-sm text-slate-400">{exp.tech?.join(" • ")}</div>
                            </div>

                            {exp.bullets && (
                                <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-5 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech?.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs inline-block px-2 py-1 rounded bg-white/5 text-slate-200"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {exp.url && (
                                    <Link
                                        href={exp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-sky-400 hover:text-sky-300 underline"
                                    >
                                        Visit
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExprienceCard;