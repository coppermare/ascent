"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type FormState = {
  name: string;
  company: string;
  stage: string;
  challenge: string;
  referral: string;
};

const inputClass =
  "w-full h-11 rounded-md border px-3.5 text-[14px] bg-white focus:outline-none transition-colors placeholder:text-[#A1A1AA]";
const labelClass = "block text-[13px] mb-2";
const baseBorder = "#E4E4E7";
const focusBorder = "#5A4FCF";
const fieldStyle = { borderColor: baseBorder, color: "#0A0A0A" };

export function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    stage: "",
    challenge: "",
    referral: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-10">
        <p
          className="text-[24px] md:text-[28px] font-normal tracking-tight mb-4 leading-tight"
          style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
        >
          We&rsquo;ll be in touch within one business day.
        </p>
        <p className="text-[16px] leading-relaxed" style={{ color: "#3F3F46" }}>
          Every submission gets read before it gets a reply. If there&rsquo;s a
          clear fit, we&rsquo;ll suggest a time for the call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={{ color: "#0A0A0A" }}>
            Your name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            className={inputClass}
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = focusBorder)}
            onBlur={(e) => (e.target.style.borderColor = baseBorder)}
          />
        </div>
        <div>
          <label className={labelClass} style={{ color: "#0A0A0A" }}>
            Company
          </label>
          <input
            type="text"
            required
            value={form.company}
            onChange={set("company")}
            className={inputClass}
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = focusBorder)}
            onBlur={(e) => (e.target.style.borderColor = baseBorder)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          Stage
        </label>
        <select
          required
          value={form.stage}
          onChange={set("stage")}
          className="w-full h-11 rounded-md border px-3.5 pr-9 text-[14px] bg-white focus:outline-none transition-colors appearance-none"
          style={{
            ...fieldStyle,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%2371717A' stroke-width='1.5' stroke-linecap='round'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
          }}
          onFocus={(e) => (e.target.style.borderColor = focusBorder)}
          onBlur={(e) => (e.target.style.borderColor = baseBorder)}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="series-a">Series A</option>
          <option value="series-b">Series B</option>
          <option value="series-c">Series C+</option>
          <option value="bootstrapped">Bootstrapped / profitable</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          What&rsquo;s the growth question on your mind?
        </label>
        <textarea
          required
          value={form.challenge}
          onChange={set("challenge")}
          rows={4}
          className="w-full rounded-md border px-3.5 py-3 text-[14px] bg-white focus:outline-none transition-colors resize-none placeholder:text-[#A1A1AA]"
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = focusBorder)}
          onBlur={(e) => (e.target.style.borderColor = baseBorder)}
        />
      </div>

      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          How did you hear about Ascent?
        </label>
        <input
          type="text"
          value={form.referral}
          onChange={set("referral")}
          className={inputClass}
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = focusBorder)}
          onBlur={(e) => (e.target.style.borderColor = baseBorder)}
        />
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full">
          Send
        </Button>
        <p className="text-[12px] text-center mt-4" style={{ color: "#A1A1AA" }}>
          One business day for a reply. No deck, no follow-up sequence.
        </p>
      </div>
    </form>
  );
}
