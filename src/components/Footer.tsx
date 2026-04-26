import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { BrandLogo } from "@/components/BrandLogo";

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
    { href: "/#lead-magnet", label: "Signal Audit Guide" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="mt-auto py-14"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1fr_auto_auto_auto] mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 max-w-[280px]">
            <div className="mb-3">
              <BrandLogo variant="black" height={24} withLink />
            </div>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--secondary-text)" }}>
              AI-native growth for Series A and B companies ready to move.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4"
                style={{ color: "var(--muted-text)" }}
              >
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[14px] transition-opacity hover:opacity-70"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-[13px]" style={{ color: "var(--muted-text)" }}>
            © {new Date().getFullYear()} Ascent. All rights reserved.
          </p>
          <ButtonLink href="/book" size="sm">
            Book a 30-minute call
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
