"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map(({ q, a }, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const triggerId = `faq-trigger-${i}`;
        return (
          <div
            key={q}
            className={`border-t ${i === faqs.length - 1 ? "border-b" : ""}`}
            style={{ borderColor: "#E4E4E7" }}
          >
            <button
              id={triggerId}
              className="w-full flex items-center justify-between gap-6 py-6 text-left transition-opacity hover:opacity-70"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span
                className="text-[17px] font-normal leading-snug tracking-tight"
                style={{ color: "#0A0A0A" }}
              >
                {q}
              </span>
              <span
                className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="#71717A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
              >
                <p
                  className="text-[16px] leading-relaxed pb-6 max-w-[600px]"
                  style={{ color: "#3F3F46" }}
                >
                  {a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
