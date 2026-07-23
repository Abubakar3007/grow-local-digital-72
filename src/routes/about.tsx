import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PixelGrow Digital" },
      { name: "description", content: "We're a small team helping Indian local businesses go digital with professional, affordable websites." },
      { property: "og:title", content: "About — PixelGrow Digital" },
      { property: "og:description", content: "We help local Indian businesses grow with professional websites." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white sm:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">About us</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Small team, big mission: help every local business go digital
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            We started PixelGrow Digital because we saw incredible local businesses lose customers just because they weren't visible online. Not anymore.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg text-muted-foreground">
              We're a small, focused team of designers and developers who believe every local
              business — from your neighborhood gym to the corner sweet shop — deserves a
              website that looks as premium as their service. No big-agency prices. No
              template-clone designs. Just clean, modern websites that bring in real customers.
            </p>
            <p className="mt-6 text-muted-foreground">
              Since 2022, we've delivered 200+ websites to gyms, salons, shops, cafes and service
              providers across India. Our clients don't need to understand tech — they just tell us
              their business, and we handle the rest. Website ready in 7 days, live on Google, and
              ready to grow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "Help 10,000 Indian local businesses go digital by 2030 — affordably." },
              { icon: Heart, title: "Our Values", desc: "Honest pricing, real designs, no jargon. We treat your business like our own." },
              { icon: Users, title: "Who We Serve", desc: "Gym owners, salon owners, shopkeepers, service providers — anyone growing a local business." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Ready to work together?</h2>
            <p className="mt-2 text-muted-foreground">Tell us about your business — we'll show you what's possible.</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}