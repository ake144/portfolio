import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { ArrowUpRight, Clock } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="card-interactive flex h-full flex-col overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-border px-6 py-3.5">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
                        sys://article
                    </p>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary/75">
                        {post.author.split(" ")[0]}
                    </span>
                </div>

                {/* Content area */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <p className="eyebrow mb-4">Writing</p>
                            <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-primary/90">
                                {post.title}
                            </h3>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-white/3 text-white/35 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                            <ArrowUpRight className="h-5 w-5" />
                        </div>
                    </div>

                    <p className="mt-5 line-clamp-3 flex-1 text-sm leading-[1.8] text-white/45">
                        {post.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag-pill">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                            <Clock className="h-3 w-3" />
                            <time dateTime={post.date}>{formattedDate}</time>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 transition-colors group-hover:text-white/60">
                            Read article
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
