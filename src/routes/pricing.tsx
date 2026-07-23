import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — PixelGrow Digital" },
      { name: "description", content: "Transparent one-time pricing for professional websites. Plans starting from ₹2,999." },
      { property: "og:title", content: "Pricing — PixelGrow Digital" },
      { property: "og:description", content: "Affordable website plans starting from ₹2,999 one-time." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Basic",
    price: "₹2,999",
    tag: "For solo owners just getting online",
    features: ["3-page website", "Mobile responsive", "WhatsApp chat button", "Contact form", "1 round of edits", "5-day delivery"],
  },
  {
    name: "Standard",
    price: "₹5,999",
    tag: "Most local businesses pick this",
    featured: true,
    features: ["6-page website", "Custom modern design", "Lead capture forms", "Google Maps integration", "Basic on-page SEO", "Google Business Profile setup", "2 rounds of edits", "7-day delivery"],
  },
  {
    name: "Premium",
    price: "₹9,999",
    tag: "For serious growth & e-commerce",
    features: ["10+ pages or online store", "Premium animations", "Advanced SEO + schema", "Content writing (Hinglish)", "Photo editing", "UPI / Razorpay payment", "3 months free support", "Unlimited edits"],
  },
];

const compare = [
  { feature: "Number of pages", basic: "3", std: "6", pro: "10+" },
  { feature: "Mobile responsive", basic: true, std: true, pro: true },
  { feature: "WhatsApp integration", basic: true, std: true, pro: true },
  { feature: "Lead capture forms", basic: false, std: true, pro: true },
  { feature: "SEO optimization", basic: false, std: "Basic", pro: "Advanced" },
  { feature: "Content writing", basic: false, std: false, pro: true },
  { feature: "E-commerce / payments", basic: false, std: false, pro: true },
  { feature: "Support after launch", basic: "7 days", std: "30 days", pro: "3 months" },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-primary" />;
  if (v === false) return <X className="mx-auto h-4 w-4 text-muted-foreground/60" />;
  return <span className="text-sm">{v}</span>;
}

function PricingPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white sm:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Simple, honest pricing</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            One-time payment. No monthly lock-ins. Choose the plan that fits your business today — you can always upgrade later.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 shadow-[var(--shadow-card)] ${
                p.featured ? "border-primary bg-card ring-2 ring-primary/30" : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  Most Popular
                </div>
              )}
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-xs text-muted-foreground">{p.tag}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured ? "text-primary-foreground" : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
                style={p.featured ? { background: "var(--gradient-primary)" } : undefined}
              >
                Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">Compare all features</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-left">
                <tr>
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Standard</th>
                  <th className="px-6 py-4 text-center font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="px-6 py-4">{row.feature}</td>
                    <td className="px-6 py-4 text-center"><Cell v={row.basic} /></td>
                    <td className="px-6 py-4 text-center"><Cell v={row.std} /></td>
                    <td className="px-6 py-4 text-center"><Cell v={row.pro} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Not sure which plan fits? <Link to="/contact" className="font-semibold text-primary hover:underline">Talk to us</Link> — we'll recommend honestly.
          </p>
        </div>
      </section>
    </div>
  );
}