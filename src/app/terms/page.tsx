import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service — Ascent",
  description: "Terms governing use of the Ascent website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: May 2026"
        variant="light"
      />
      <section className="mx-auto max-w-[720px] px-6 py-16 space-y-10" style={{ color: "var(--body-text)" }}>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>1. Acceptance</h2>
          <p className="text-[16px] leading-relaxed">
            By accessing or using this website you agree to these terms. If you do not agree, please do not use the site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>2. Services</h2>
          <p className="text-[16px] leading-relaxed">
            This website provides information about Ascent&apos;s growth services and allows you to submit enquiries. Specific service engagements are governed by separate written agreements.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>3. Intellectual property</h2>
          <p className="text-[16px] leading-relaxed">
            All content on this website — including copy, design, graphics, and code — is owned by or licensed to Ascent. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>4. Disclaimer</h2>
          <p className="text-[16px] leading-relaxed">
            This website is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee that the site will be uninterrupted, error-free, or free of harmful components. Results described in case studies reflect specific client engagements and are not guaranteed for any future engagement.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>5. Limitation of liability</h2>
          <p className="text-[16px] leading-relaxed">
            To the fullest extent permitted by law, Ascent shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>6. Links</h2>
          <p className="text-[16px] leading-relaxed">
            This site may contain links to third-party websites. We are not responsible for the content or practices of those sites.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>7. Governing law</h2>
          <p className="text-[16px] leading-relaxed">
            These terms are governed by applicable law. Any disputes shall be subject to the exclusive jurisdiction of the relevant courts.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold" style={{ color: "var(--heading)" }}>8. Contact</h2>
          <p className="text-[16px] leading-relaxed">
            Questions about these terms?{" "}
            <a href="mailto:contact@kristikumrija.com" className="underline" style={{ color: "var(--primary)" }}>
              contact@kristikumrija.com
            </a>
          </p>
        </div>

      </section>
    </>
  );
}
