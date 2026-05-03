"use client";

import { useState } from "react";
import { StaggerIn } from "@/components/AnimateIn";

interface FAQ {
  category: string;
  questions: { q: string; a: string }[];
}

export function FAQContent({ faqs }: { faqs: FAQ[] }) {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  const active = faqs.find((f) => f.category === activeCategory) ?? faqs[0];

  return (
    <section className="py-20 md:py-28" style={{ background: "#FAF9F6" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Tab bar */}
        <div
          className="flex gap-1 overflow-x-auto mb-14 border-b pb-0"
          style={{ borderColor: "#E4E4E7" }}
        >
          {faqs.map(({ category }) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="shrink-0 text-[14px] font-medium pb-3 px-1 mr-5 border-b-2 transition-colors"
                style={{
                  color: isActive ? "#5A4FCF" : "#71717A",
                  borderBottomColor: isActive ? "#5A4FCF" : "transparent",
                  marginBottom: "-1px",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Q&A list */}
        <StaggerIn className="max-w-[720px] divide-y" style={{ borderColor: "#E4E4E7" }}>
          {active.questions.map(({ q, a }) => (
            <div key={q} className="py-8">
              <h3
                className="text-[18px] font-medium mb-3 leading-snug tracking-tight"
                style={{ color: "#0A0A0A" }}
              >
                {q}
              </h3>
              <p
                className="text-[15px] leading-[1.75]"
                style={{ color: "#3F3F46" }}
              >
                {a}
              </p>
            </div>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
