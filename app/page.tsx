import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";
import ExperienceSection from "@/components/experience/experience-section";
import ContactSection from "@/components/contact/contact-section";
import GSAPAnimations from "@/components/gsap-animations";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <main className="relative">
      <GSAPAnimations />
      <HeroSection />

      {/* ── Page content container ─────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* About section */}
        {/* <section id="about" className="mt-10 sm:mt-14">
          <AboutMe />
        </section> */}

        {/* Work section */}
        <section id="work" className="mt-16 sm:mt-24">
          <Projects />
        </section>

        {/* Experience section */}
        <section id="experience" className="mt-16 sm:mt-24">
          <ExperienceSection />
        </section>

        {/* Blog section */}
        <section id="blog" className="mt-16 sm:mt-24">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="accent-line">Latest writing</p>
              <h2
                className="mt-5 text-balance text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                Notes on craft, systems,<br className="hidden sm:block" /> and product thinking.
              </h2>
            </div>
            <Link
              href="/blog"
              className="ghost-btn shrink-0 self-start sm:self-auto"
            >
              All posts
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <BlogList posts={featuredPosts} />
        </section>

        {/* Contact section */}
        <section id="contact" className="mt-16 sm:mt-24 pb-16 sm:pb-24">
          <div className="mb-10">
            <p className="accent-line">Get in touch</p>
            <h2
              className="mt-5 text-balance text-white"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              Let's build something<br className="hidden sm:block" /> extraordinary.
            </h2>
          </div>
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
