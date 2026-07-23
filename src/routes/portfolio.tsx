import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import gym from "@/assets/portfolio-gym.jpg";
import salon from "@/assets/portfolio-salon.jpg";
import shop from "@/assets/portfolio-shop.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import realestate from "@/assets/portfolio-realestate.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — WebDost" },
      { name: "description", content: "See websites we've built for gyms, salons, shops, cafes and real-estate businesses across India." },
      { property: "og:title", content: "Portfolio — WebDost" },
      { property: "og:description", content: "See our recent website work for local Indian businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: gym, name: "FitZone Gym", category: "Fitness", desc: "Modern gym website with class schedule, trainer profiles and free-trial booking. 3x more leads in the first month." },
  { img: salon, name: "Bella Salon & Spa", category: "Beauty", desc: "Elegant booking website with service menu, gallery and WhatsApp appointment flow. Bookings nearly doubled." },
  { img: shop, name: "Urban Kicks", category: "Retail", desc: "Local shoe boutique with product catalog, WhatsApp order and store locator. Walk-ins up by 40%." },
  { img: restaurant, name: "Cafe Aroma", category: "Food & Beverage", desc: "Cafe website with digital menu, table reservation and Zomato/Swiggy integration." },
  { img: realestate, name: "Dream Homes Realty", category: "Real Estate", desc: "Property listing site with filters, EMI calculator and enquiry-to-WhatsApp routing." },
];

function PortfolioPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white sm:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">Our work</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Websites that actually work for the business</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85">
            A few of our recent projects for local businesses across India.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} website preview`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{p.category}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Get a website like this <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}