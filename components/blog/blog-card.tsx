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
            <article className="flex h-full flex-col overflow-hidden transition-all duration-500">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-black/40 px-6 py-3.5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                        SYS://ARTICLE
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500/80">
                        {post.author.split(" ")[0]}
                    </span>
                </div>

                {/* Content area */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <p className="accent-line mb-4">Writing</p>
                            <h3
                                className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-red-100"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {post.title}
                            </h3>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/40 transition-all duration-300 group-hover:border-red-500/50 group-hover:bg-red-500/10 group-hover:text-white">
                            <ArrowUpRight className="h-5 w-5" />
                        </div>
                    </div>

                    <p className="mt-5 line-clamp-3 flex-1 text-sm leading-[1.8] text-white/50">
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
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
                            <Clock className="h-3 w-3" />
                            <time dateTime={post.date}>{formattedDate}</time>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors group-hover:text-white/60">
                            Read article
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
