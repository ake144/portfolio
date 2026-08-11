import { notFound } from "next/navigation";
import Link from "next/link";
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
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
            <div className="section-card p-6 sm:p-8 lg:p-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white"
                >
                    <IconArrowLeft className="h-4 w-4" />
                    Back to blog
                </Link>

                <header className="mb-10 mt-8">
                    <div className="mb-6 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="tag-pill">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="mb-6 max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>

                    <p className="max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-4 border-b border-border pb-8 pt-6 font-mono text-xs uppercase tracking-widest text-white/35">
                        <span>{post.author}</span>
                        <span>·</span>
                        <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-white/70 prose-a:text-primary prose-strong:text-white prose-code:text-primary/90 prose-pre:border prose-pre:border-border prose-pre:bg-black/60">
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
        </main>
    );
}
