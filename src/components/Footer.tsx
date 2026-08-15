import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "../assets/logo.png"

export function Footer() {
  return (
    <footer
      className="text-white/80"
      style={{ background: "var(--dark-bg)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-white">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl"
              style={{ background: "white" }}
            >
              <img src={Logo} alt="logo" />
            </span>
            <span className="text-lg">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/80">{site.tagline}</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Pages</h3>
          <div className="flex gap-12">
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {site.email}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/80 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built for local businesses that want to grow.</p>
        </div>
      </div>
    </footer>
  );
}