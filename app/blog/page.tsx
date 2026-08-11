import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
            <p className="eyebrow mb-6">
                <span>—</span>Blog archive
            </p>

            <section className="grid gap-6 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
                <div>
                    <h1 className="section-heading">
                        Thoughts, notes &amp; product lessons.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
                        A collection of writing on UI craft, software engineering, and the practical side of
                        building digital products.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/#contact" className="glow-btn">
                            Start a conversation
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link href="/#projects" className="ghost-btn">
                            Browse work
                        </Link>
                    </div>
                </div>

                <div className="section-card grid gap-4 p-6 sm:p-8">
                    <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                            Quick index
                        </p>
                        <div className="mt-5 grid gap-2.5 text-sm text-white/65 sm:grid-cols-2 lg:grid-cols-1">
                            {["Product thinking", "UI and interaction design", "Backend and architecture notes", "Build logs and process"].map(
                                (topic) => (
                                    <div key={topic} className="rounded-md border border-border bg-white/3 px-4 py-2.5">
                                        {topic}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <p className="border-t border-border pt-5 text-sm leading-7 text-white/50">
                        I use this space to keep a running record of decisions, experiments, and lessons that
                        are easier to remember when they are written down.
                    </p>
                </div>
            </section>

            <div className="mt-14 sm:mt-16">
                <BlogList posts={posts} />
            </div>
        </main>
    );
}
