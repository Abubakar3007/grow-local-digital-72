import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function BlogLeadCTA({ audience = "business" }: { audience?: string }) {
  return (
    <div
      className="mt-12 overflow-hidden rounded-3xl border border-primary/20 p-8 text-white shadow-[var(--shadow-glow)] sm:p-10"
      style={{ background: "var(--gradient-hero)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">
        Limited time — for local businesses
      </p>
      <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Ready to turn your {audience} into a lead-generating machine?
      </h3>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        Get a professional, mobile-first website with WhatsApp integration, Google SEO,
        and a free-trial funnel — built and delivered in 7 days. Free strategy call, no obligation.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--dark-bg)] transition-transform hover:scale-105"
        >
          Book Free Strategy Call <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
        </a>
      </div>
    </div>
  );
}