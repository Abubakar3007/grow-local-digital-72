import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Globe, Layout, MessageCircle, Search, ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PixelGrow Digital" },
      { name: "description", content: "Website design for gyms, business websites, landing pages, WhatsApp integration and SEO for local businesses." },
      { property: "og:title", content: "Services — PixelGrow Digital" },
      { property: "og:description", content: "Website design, landing pages, WhatsApp integration and SEO for local businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Dumbbell,
    title: "Website Design for Gyms",
    desc: "Convert walk-bys into members with a bold, high-energy gym website that shows classes, trainers, pricing and lets people book a trial online.",
    features: ["Membership plans page", "Trainer profiles", "Class schedule", "Free trial booking form"],
  },
  {
    icon: Globe,
    title: "Business Website Development",
    desc: "Full-featured websites for salons, shops, clinics, cafes and service providers. Modern design, mobile-first, built to bring in local customers.",
    features: ["Custom 5–10 page design", "Services & pricing", "Gallery / portfolio", "Google Maps + reviews"],
  },
  {
    icon: Layout,
    title: "High-Converting Landing Pages",
    desc: "Single-page websites built for one goal — capture leads or sales. Perfect for running Facebook and Google ads.",
    features: ["1-page focused design", "Lead capture form", "WhatsApp CTA", "Fast load times"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    desc: "Floating WhatsApp button, click-to-chat, pre-filled messages and enquiry forms that land directly in your WhatsApp — never miss a lead.",
    features: ["Floating chat button", "Pre-filled messages", "Form → WhatsApp", "Multi-number routing"],
  },
  {
    icon: Search,
    title: "SEO Basics",
    desc: "Rank on Google when locals search your service. On-page SEO, Google Business setup and technical basics — done right from day one.",
    features: ["Keyword research", "On-page optimization", "Google Business Profile", "Schema + sitemap"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Setup",
    desc: "Sell online with a lightweight store — product catalog, cart, UPI/Razorpay payments and simple order management.",
    features: ["Product catalog", "UPI / card payments", "Order notifications", "Inventory basics"],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white sm:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">What we do</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Websites & digital services built to grow your business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Everything a local business needs to look professional online and turn traffic into customers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((s) => (
            <div key={s.title} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}