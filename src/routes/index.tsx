import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  MessageSquare,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebDost — Websites that Bring Customers" },
      {
        name: "description",
        content:
          "Get a professional website for your gym, salon, shop or business. Modern design, mobile-ready, SEO optimized. Launch in 7 days.",
      },
      { property: "og:title", content: "WebDost — Websites that Bring Customers" },
      { property: "og:description", content: "Get a professional website for your gym, salon, shop or business. Modern design, mobile-ready, SEO optimized. Launch in 7 days." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grow-local-digital-72.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://grow-local-digital-72.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "WebDost",
          url: "https://grow-local-digital-72.lovable.app",
          description:
            "WebDost helps local Indian businesses grow with professional, mobile-first websites, SEO and WhatsApp lead funnels.",
          email: "bakardeveloper0007@gmail.com",
          telephone: "+91 85959 25473",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Delhi NCR",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "WebDost",
          url: "https://grow-local-digital-72.lovable.app",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { q: "Why does my small business need a website?", a: "Customers Google your business before visiting. Without a website you lose trust and enquiries to competitors who show up online." },
            { q: "How much does a website cost?", a: "Our plans start from ₹2,999 one-time. That's less than one week of print ads — and works for you 24/7 forever." },
            { q: "How long does it take?", a: "Most websites go live within 7 days after we receive your content. Rush delivery available in 48 hours." },
            { q: "Will it work on mobile?", a: "Yes. Every website we build is mobile-first and loads fast on 4G. 70%+ of your visitors will come from phones." },
            { q: "Do you provide content and photos?", a: "We help write copy in English or Hinglish and can source stock images. Your own photos work best — we polish them for the web." },
            { q: "What happens after launch?", a: "We include free support and small edits for the first month. After that, care plans start at ₹499/month." },
          ].map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1400}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent,var(--dark-bg))]" />

        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Limited time offer for local businesses — 40% off this month
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Get More Customers for Your Business with a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Professional Website
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
              We design conversion-focused websites for gyms, salons, shops and
              local service providers. Look premium, build trust, and turn
              visitors into paying customers — in just 7 days.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
              >
                Get Your Website Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:gap-10">
              {[
                { k: "50+", v: "Websites Delivered" },
                { k: "7 Days", v: "Average Launch" },
                { k: "4.9/5", v: "Client Rating" },
              ].map((s) => (
                <div key={s.v} className="text-center">
                  <div className="text-2xl font-bold sm:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs text-white/80 sm:text-sm">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-border bg-secondary/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by growing businesses across India
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-muted-foreground sm:grid-cols-3 md:grid-cols-6">
            {["FitZone Gym", "Bella Salon", "Sharma Sweets", "Urban Kicks", "Cafe Aroma", "Dream Homes"].map((n) => (
              <div key={n} className="opacity-70 transition-opacity hover:opacity-100">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why a website</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Turn your business into a customer magnet</h2>
            <p className="mt-4 text-muted-foreground">
              90% of customers search online before visiting a business. Without a website, you're invisible. Here's what changes when you go digital with us.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, title: "More Customers Daily", desc: "Show up on Google when locals search for your service — bring in new customers on autopilot." },
              { icon: TrendingUp, title: "24/7 Online Presence", desc: "Your business stays open even when your shop is closed. Bookings, enquiries and calls keep coming." },
              { icon: Shield, title: "Build Instant Trust", desc: "A premium website makes customers pick you over competitors. Look big even if you're just starting." },
            ].map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div
                  className="mb-4 grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden py-20 text-white sm:py-28" style={{ background: "var(--dark-bg)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">Simple 3-step process</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">From idea to live website in 7 days</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: MessageSquare, step: "01", title: "Contact & Discuss", desc: "WhatsApp us your business details. We understand your goals and audience in a quick 15-min call." },
              { icon: Palette, step: "02", title: "Design & Build", desc: "Our team designs a modern, mobile-ready website with your branding, content and lead-capture forms." },
              { icon: Rocket, step: "03", title: "Launch & Grow", desc: "We publish your site, set up WhatsApp integration and basic SEO — and you start getting customers." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="absolute -top-4 right-6 rounded-full bg-white/10 px-3 py-1 text-xs font-mono">{s.step}</div>
                <div
                  className="mb-4 grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Affordable plans, real results</h2>
            <p className="mt-4 text-muted-foreground">No hidden charges. One-time payment. Cheaper than one month of Facebook ads.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Basic", price: "₹2,999", tag: "Perfect to get started", features: ["3-page website", "Mobile responsive", "WhatsApp button", "Contact form"] },
              { name: "Standard", price: "₹5,999", tag: "Most popular", featured: true, features: ["6-page website", "Custom design", "Lead capture forms", "Basic SEO setup", "Google Maps integration"] },
              { name: "Premium", price: "₹9,999", tag: "For serious growth", features: ["10+ pages / e-commerce", "Premium animations", "Advanced SEO", "Content writing", "3 months support"] },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-8 shadow-[var(--shadow-card)] ${p.featured
                  ? "border-primary bg-card ring-2 ring-primary/30"
                  : "border-border bg-card"
                  }`}
              >
                {p.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.tag}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${p.featured ? "text-primary-foreground" : "border border-border bg-background text-foreground hover:bg-secondary"
                    }`}
                  style={p.featured ? { background: "var(--gradient-primary)" } : undefined}
                >
                  Choose {p.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/pricing" className="text-sm font-semibold text-primary hover:underline">
              See full pricing comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Loved by business owners like you</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Rohit Sharma", biz: "FitZone Gym, Pune", quote: "Website ke baad monthly 30+ new leads aane lage. Design bhi bahut premium hai — members ko impress karta hai." },
              { name: "Priya Verma", biz: "Bella Salon, Delhi", quote: "Bookings almost double ho gayi. WhatsApp integration ne game change kar diya. Highly recommend!" },
              { name: "Anand Patel", biz: "Sharma Sweets, Ahmedabad", quote: "7 din mein website live thi. Customers ab Google se milte hain — pehle sirf walk-ins the." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Questions? Answered.</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: "Why does my small business need a website?", a: "Customers Google your business before visiting. Without a website you lose trust and enquiries to competitors who show up online." },
              { q: "How much does a website cost?", a: "Our plans start from ₹2,999 one-time. That's less than one week of print ads — and works for you 24/7 forever." },
              { q: "How long does it take?", a: "Most websites go live within 7 days after we receive your content. Rush delivery available in 48 hours." },
              { q: "Will it work on mobile?", a: "Yes. Every website we build is mobile-first and loads fast on 4G. 70%+ of your visitors will come from phones." },
              { q: "Do you provide content and photos?", a: "We help write copy in English or Hinglish and can source stock images. Your own photos work best — we polish them for the web." },
              { q: "What happens after launch?", a: "We include free support and small edits for the first month. After that, care plans start at ₹499/month." },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-card)]">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                  {f.q}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-10 text-center text-white sm:p-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
            <Zap className="h-3 w-3" /> Limited slots — only 5 projects this month
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to get more customers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Book a free 15-minute consultation. We'll show you exactly what your business needs — no commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--dark-bg)] transition-transform hover:scale-105"
            >
              Get Your Website Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
