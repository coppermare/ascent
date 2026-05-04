import Link from "next/link";
import { FooterShader } from "@/components/FooterShader";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#signal-audit", label: "Signal Audit" },
    { href: "/services#growth-sprint", label: "Growth Sprint" },
    { href: "/services#retainer", label: "Retainer Partnership" },
  ],
  Resources: [
    { href: "/faq", label: "FAQ" },
    { href: "/insights", label: "Insights" },
    { href: "/#lead-magnet", label: "Signal Audit Guide" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden mt-auto" style={{ background: "#0A0A0A" }}>
      <FooterShader />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1fr_auto_auto_auto] mb-16">
          {/* Copyright */}
          <div className="col-span-2 md:col-span-1 max-w-[280px]">
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              © {new Date().getFullYear()} Ascent. All rights reserved.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[14px] transition-opacity hover:opacity-100"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Full-width wordmark */}
      <div className="relative w-full px-6 pb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo_primary.svg"
          alt="Ascent"
          className="w-full"
          style={{ maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)" }}
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
