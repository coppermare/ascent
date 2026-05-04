"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { ButtonLink } from "@/components/Button";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-300"
      style={{
        background: transparent ? "transparent" : "var(--background)",
        borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <BrandLogo variant={transparent ? "white" : "primary"} height={27} withLink />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className="text-[14px] transition-opacity hover:opacity-70"
                style={{
                  color: transparent
                    ? active ? "#ffffff" : "rgba(255,255,255,0.75)"
                    : active ? "var(--primary)" : "var(--body-text)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/book" variant={transparent ? "inverted" : "primary"} size="sm">
            Book
          </ButtonLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded lg:hidden hover:bg-black/[0.06] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={22} weight="regular" style={{ color: transparent ? "#ffffff" : "var(--heading)" }} />
          ) : (
            <List size={22} weight="regular" style={{ color: transparent ? "#ffffff" : "var(--heading)" }} />
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
