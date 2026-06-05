import React from 'react';

const experiences = [
    {
        id: 1,
        company: "Safaricom Ethiopia",
        role: "Full-Stack & AI Engineer",
        period: "2025 – PRESENT",
    },
    {
        id: 2,
        company: "SRE Technologies",
        role: "Full Stack Engineer",
        period: "2023 – 2025",
    },
    {
        id: 3,
        company: "Marvels Creative Tech",
        role: "Frontend Developer",
        period: "2024 – 2025",
    },
];

const skills = [
    { name: "TypeScript", icon: "⇥" },
    { name: "React / Next.js", icon: "⟨⟩" },
    { name: "Node.js / FastAPI", icon: "⬡" },
    { name: "LangChain / RAG", icon: "⬡" },
    { name: "LLM Evaluation", icon: "⎔" },
    { name: "Agentic Workflows", icon: "▱" },
    { name: "PostgreSQL / VectorDB", icon: "◫" },
    { name: "Docker / AWS", icon: "⬢" },
    { name: "Prompt Engineering", icon: "⤷" },
    { name: "OpenAI / Anthropic", icon: "✦" },
];

const CareersSkills = () => {
    return (
        <section id="experience" className="relative w-full bg-transparent text-[#e0e0e0] font-mono border-t border-[#222] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">

                    {/* Careers Column */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4 uppercase">CAREERS</h2>
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                                HOME / EXPERIENCE / TIMELINE
                            </div>
                        </div>

                        <div className="flex flex-col border-t border-[#222]">
                            {experiences.map((exp, i) => (
                                <div key={exp.id} className={`flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#222]`}>
                                    <div>
                                        <h3 className="text-sm font-bold text-white mb-1.5">{exp.role}</h3>
                                        <p className="text-xs text-gray-400 font-mono tracking-widest uppercase">@ {exp.company}</p>
                                    </div>
                                    <div className="text-[10px] text-gray-600 font-bold tracking-widest mt-3 sm:mt-0 uppercase">
                                        {exp.period}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div className="relative">
                        <div className="absolute right-0 top-0 text-[10px] text-gray-600 tracking-widest uppercase hidden lg:block opacity-50">
                            + SYS_CAPABILITIES
                        </div>
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4 uppercase">SKILLS</h2>
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                                HOME / SKILLS / MATRIX
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="border border-[#222] bg-[#0c0c0c] hover:bg-[#111] transition-colors p-4 flex items-center gap-4">
                                    <div className="w-6 h-6 flex items-center justify-center bg-[#161616] border border-[#333] text-gray-400 text-xs">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs font-bold text-white tracking-widest">{skill.name}</span>
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