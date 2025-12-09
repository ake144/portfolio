import { cn } from "@/lib/utils";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const FooterPage = () => {
    return (
        <footer className="relative bg-neutral-950 text-slate-100 overflow-hidden">
            {/* Grid pattern background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            {/* Radial gradient overlay for fade effect */}
            <div className="pointer-events-none absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="h-[15rem] sm:h-[20rem] flex items-center justify-center">
                    <TextHoverEffect text="UIForest" />
                </div>

                <div className="text-center">
                    <p className="text-sm text-slate-500">
                        © 2025 UIForest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;