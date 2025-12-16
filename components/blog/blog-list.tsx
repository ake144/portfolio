import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No blog posts yet. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="relative z-10 w-full max-w-7xl border border-neutral-800 bg-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
                {posts.map((post) => (
                    <div className="bg-black h-full" key={post.slug}>
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
