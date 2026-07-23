import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { posts } from "@/lib/blog";
import { BlogLeadCTA } from "@/components/BlogLeadCTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — WebDost" },
      {
        name: "description",
        content:
          "Practical guides on websites, SEO, WhatsApp marketing, and lead generation for gym owners and local businesses in India.",
      },
      { property: "og:title", content: "Blog & Resources — WebDost" },
      {
        property: "og:description",
        content: "Growth guides for gym owners and local businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grow-local-digital-72.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://grow-local-digital-72.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <section
        className="relative overflow-hidden py-20 text-white sm:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">
            Blog & Resources
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Growth guides for gyms & local businesses
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            No fluff. Real tactics we use to help clients get more customers through
            websites, SEO, and WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">
                    <Tag className="h-3 w-3" /> {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold tracking-tight text-foreground group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <BlogLeadCTA audience="business" />
          </div>
        </div>
      </section>
    </div>
  );
}