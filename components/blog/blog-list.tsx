import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] py-16 text-center">
                <p className="text-lg text-white/60">No blog posts yet. Check back soon.</p>
            </div>
        );
    }

    return (
        <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                    <div className="h-full bg-black/70" key={post.slug}>
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
