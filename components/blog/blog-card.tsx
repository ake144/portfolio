import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

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
            <article className="flex flex-col h-full p-8 sm:p-10 transition-colors hover:bg-neutral-900/50">
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center text-xs font-medium text-neutral-500 uppercase tracking-wider"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.description}
                </p>

                <div className="flex items-center justify-between text-sm text-neutral-500 pt-6 border-t border-neutral-800 mt-auto">
                    <div className="flex items-center gap-2">
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <span className="text-xs font-bold uppercase tracking-wider">Read</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
