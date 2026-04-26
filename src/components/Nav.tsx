"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
      className="sticky top-0 z-50 h-16"
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <BrandLogo variant="primary" height={22} withLink />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className="text-[14px] transition-colors hover:opacity-70"
                style={{
                  color: active ? "var(--primary)" : "var(--body-text)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/work" variant="ghost" size="sm">
            Our Work
          </ButtonLink>
          <ButtonLink href="/book" variant="primary" size="sm">
            Book
          </ButtonLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={22} style={{ color: "var(--heading)" }} />
          ) : (
            <Menu size={22} style={{ color: "var(--heading)" }} />
          )}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 flex flex-col gap-6 px-6 py-8 lg:hidden"
          style={{ background: "var(--background)" }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[18px]"
                style={{
                  color: active ? "var(--primary)" : "var(--heading)",
                  fontWeight: active ? 600 : 500,
                }}
              >
                {label}
              </Link>
            );
          })}
          <hr style={{ borderColor: "var(--border)" }} />
          <ButtonLink
            href="/work"
            variant="ghost"
            size="lg"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Our Work
          </ButtonLink>
          <ButtonLink
            href="/book"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Book
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
