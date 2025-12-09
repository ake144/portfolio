import { cn } from "@/lib/utils";
import Projects from "@/components/projects";

const ProjectsPage = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
            {/* Grid pattern background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            {/* Radial gradient overlay for fade effect */}
            <div className="pointer-events-none absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="relative z-10">
                <Projects />
            </div>
        </section>
    );
};

export default ProjectsPage;
