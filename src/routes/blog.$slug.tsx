import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Tag, Users } from "lucide-react";
import { getPost, posts } from "@/lib/blog";
import { BlogLeadCTA } from "@/components/BlogLeadCTA";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — PixelGrow Digital" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — PixelGrow Digital` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <p className="mt-3 text-muted-foreground">
        The article you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <section
        className="relative overflow-hidden py-16 text-white sm:py-20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 font-medium text-white">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-white/70">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-white/70">
              <Users className="h-3 w-3" /> For {post.audience}
            </span>
            <span className="text-white/70">· {post.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{post.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <BlogLeadCTA audience={post.audience.toLowerCase()} />

          <div className="mt-16">
            <h3 className="text-lg font-bold tracking-tight">Keep reading</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="rounded-xl border border-border bg-card p-4 text-sm shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="text-xs font-medium text-primary">{r.category}</div>
                  <div className="mt-1 font-semibold text-foreground">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}