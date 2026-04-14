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
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
                >
                    <IconArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                <header className="mb-10 mt-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-none border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/65"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="mb-6 max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                        {post.title}
                    </h1>

                    <p className="max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-4 border-b border-white/10 pb-8 pt-6 text-sm text-white/45">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/75 prose-a:text-red-400 prose-strong:text-white prose-code:text-red-300 prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/60">
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
