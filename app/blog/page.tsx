import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
            <section className="grid gap-6 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
                <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
                    <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
                        Blog archive
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                        Thoughts, notes, and product lessons.
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                        A collection of writing on UI craft, software engineering, and the practical side of building digital products.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-red-500/70 bg-red-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-400"
                        >
                            Start a conversation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:text-white"
                        >
                            Browse work
                        </Link>
                    </div>
                </div>

                <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/60 p-6 sm:p-8">
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                            Quick index
                        </p>
                        <div className="mt-5 grid gap-3 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                                Product thinking
                            </div>
                            <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                                UI and interaction design
                            </div>
                            <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                                Backend and architecture notes
                            </div>
                            <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                                Build logs and process
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-5 text-sm leading-7 text-white/60">
                        I use this space to keep a running record of decisions, experiments, and lessons that are easier to remember when they are written down.
                    </div>
                </div>
            </section>

            <div className="mt-10 sm:mt-14">
                <BlogList posts={posts} />
            </div>
        </main>
    );
}
