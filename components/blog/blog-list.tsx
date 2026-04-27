import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <div className="section-card flex flex-col items-center justify-center py-24 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl">
                    ✍️
                </div>
                <p className="mt-6 text-lg font-medium text-white/60">
                    No blog posts yet.
                </p>
                <p className="mt-2 text-sm text-white/35">
                    Check back soon for new articles on craft and systems.
                </p>
            </div>
        );
    }

    return (
        <div className="section-card overflow-hidden">
            <div className="grid grid-cols-1 gap-px bg-white/[0.05] md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                    <div
                        className="h-full bg-black/75 transition hover:bg-white/[0.03]"
                        key={post.slug}
                    >
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
