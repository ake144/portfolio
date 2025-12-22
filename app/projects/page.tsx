import { cn } from "@/lib/utils";
import Projects from "@/components/projects";

const ProjectsPage = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-slate-100 font-mono">
            {/* Grid pattern background */}
            {/* <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            /> */}

            {/* Radial gradient overlay for fade effect */}
            <div className="pointer-events-none absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-12 sm:mb-16 text-center sm:text-left">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-4">Projects</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
                        Real World Projects
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto sm:mx-0">
                        I got an opportunity to work on several real-world projects that helped me enhance my skills and gain practical experience.
                        I&apos;ve put my efforts into building projects that solve real problems.
                    </p>
                </div>

                <Projects />
            </div>
        </section>
    );
};

export default ProjectsPage;
