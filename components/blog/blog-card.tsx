import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Link href={`/blog/${post.slug}`} className="block h-full group">
            <article className="flex h-full flex-col overflow-hidden border border-white/10 bg-black/65 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-black/80">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-7">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-red-400/80">
                            Writing
                        </p>
                        <h2 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl line-clamp-2">
                            {post.title}
                        </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition group-hover:border-red-500/50 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                    </div>
                </div>

                <div className="flex flex-1 flex-col px-6 py-5 sm:px-7">
                    <p className="line-clamp-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                        {post.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-none border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/45">
                        <time dateTime={post.date}>{formattedDate}</time>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                            Read article
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
