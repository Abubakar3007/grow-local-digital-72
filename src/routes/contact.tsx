import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WebDost" },
      { name: "description", content: "Get in touch to start your website project. WhatsApp, email or fill the form — we reply within 2 hours." },
      { property: "og:title", content: "Contact — WebDost" },
      { property: "og:description", content: "Contact us to start your website project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  business: z.string().trim().min(2, "Tell us your business type").max(80),
  message: z.string().trim().max(500).optional(),
});

function ContactPage() {
  const [state, setState] = useState<{ name: string; phone: string; business: string; message: string }>({
    name: "",
    phone: "",
    business: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(state);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    // Redirect to WhatsApp with pre-filled message
    const text = `Hi ${site.name}! I'm ${state.name} from ${state.business}. Phone: ${state.phone}. ${state.message ? "Message: " + state.message : ""}`;
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white sm:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary-glow)]">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's build your website</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Tell us about your business. We reply within 2 hours on working days.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">Message sent!</h2>
                  <p className="mt-2 text-sm text-muted-foreground">We've opened WhatsApp for you — just hit send. We'll reply shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">Your name</label>
                    <input
                      id="name"
                      value={state.name}
                      onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                      maxLength={80}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Rohit Sharma"
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">Phone / WhatsApp number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={state.phone}
                      onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                      maxLength={20}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="business" className="text-sm font-medium">Business type</label>
                    <input
                      id="business"
                      value={state.business}
                      onChange={(e) => setState((s) => ({ ...s, business: e.target.value }))}
                      maxLength={80}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Gym, salon, shop, cafe..."
                    />
                    {errors.business && <p className="mt-1 text-xs text-destructive">{errors.business}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">Anything else? (optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={state.message}
                      onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                      maxLength={500}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us your goals or share a reference site..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Send via WhatsApp <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">By submitting you agree to be contacted about your enquiry.</p>
                </form>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Fastest reply — usually within minutes</div>
                </div>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{site.phone}</div>
                  <div className="text-xs text-muted-foreground">Mon–Sat, 10 AM – 8 PM</div>
                </div>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{site.email}</div>
                  <div className="text-xs text-muted-foreground">We reply within 2 hours</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{site.address}</div>
                  <div className="text-xs text-muted-foreground">Serving clients across India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}