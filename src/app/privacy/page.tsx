import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — Ascent",
  description: "How Ascent collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: May 2026"
        variant="light"
      />
      <section className="mx-auto max-w-[720px] px-6 py-16 space-y-10" style={{ color: "var(--body-text)" }}>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>1. Who we are</h2>
          <p className="text-[16px] leading-relaxed">
            Ascent is an AI growth agency. When you use our website or submit an enquiry, we collect and process certain personal data. This policy explains what we collect, why, and how you can exercise your rights.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>2. Data we collect</h2>
          <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed">
            <li><strong>Contact and enquiry data</strong> — name, email address, company name, and any details you submit via our contact or booking forms.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, referring URL, and browser/device type, collected via cookies and analytics tools.</li>
            <li><strong>Communications</strong> — if you email us directly, we retain that correspondence.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>3. Why we collect it</h2>
          <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed">
            <li>To respond to your enquiry or booking request.</li>
            <li>To send you content you opted in to (e.g. our Signal Audit Guide).</li>
            <li>To understand how our website is used and improve it.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>4. Cookies</h2>
          <p className="text-[16px] leading-relaxed">
            We use strictly necessary cookies to make the site function, and optional analytics cookies to understand usage. You can accept or decline optional cookies via the banner shown on your first visit. You can withdraw consent at any time by clearing your browser cookies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>5. Data sharing</h2>
          <p className="text-[16px] leading-relaxed">
            We do not sell your personal data. We may share it with trusted service providers (email delivery, analytics, scheduling) under data processing agreements. We will disclose data if required by law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>6. Your rights</h2>
          <p className="text-[16px] leading-relaxed">
            Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise any of these rights, contact us at{" "}
            <a href="mailto:contact@kristikumrija.com" className="underline" style={{ color: "var(--primary)" }}>
              contact@kristikumrija.com
            </a>.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>7. Retention</h2>
          <p className="text-[16px] leading-relaxed">
            We retain enquiry and contact data for up to 3 years unless you ask us to delete it sooner. Analytics data is retained in aggregated, anonymised form.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>8. Changes</h2>
          <p className="text-[16px] leading-relaxed">
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top will reflect any changes.
          </p>
        </div>

      </section>
    </>
  );
}
