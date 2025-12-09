import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { IconArrowLeft } from "@tabler/icons-react";

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
            {/* Grid pattern background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            {/* Radial gradient overlay for fade effect */}
            <div className="pointer-events-none absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                >
                    <IconArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Article header */}
                <header className="mb-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 px-3 py-1 text-xs font-medium text-sky-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 mb-6">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-white/10 pb-8">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                </header>

                {/* Article content */}
                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-sky-400 prose-strong:text-white prose-code:text-emerald-400 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .replace(/^# .+\n/, "") // Remove first h1 since we display title separately
                                .split("\n")
                                .map((line) => {
                                    if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
                                    if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
                                    if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
                                    if (line.startsWith("```")) return line.includes("```") && line.length > 3 ? `<pre><code>` : `</code></pre>`;
                                    if (line.trim() === "") return "<br/>";
                                    return `<p>${line}</p>`;
                                })
                                .join("\n"),
                        }}
                    />
                </article>
            </div>
        </section>
    );
}
