import Link from "next/link";
import { BlogPost } from "@/lib/blog";

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
        <Link href={`/blog/${post.slug}`}>
            <article className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-[1.02]">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 px-3 py-1 text-xs font-medium text-sky-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>{formattedDate}</time>
                </div>

                {/* Hover gradient accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </article>
        </Link>
    );
}
