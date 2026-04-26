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
  "w-full h-11 rounded border px-4 text-[14px] bg-white focus:outline-none transition-colors";
const labelClass =
  "block text-[13px] font-semibold mb-1.5";
const fieldStyle = { borderColor: "#E4E4E7", color: "#0A0A0A" };

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
    // TODO: wire to booking service / calendar
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <p
          className="text-[22px] font-bold mb-3"
          style={{ color: "#0A0A0A" }}
        >
          We'll be in touch within one business day.
        </p>
        <p className="text-[16px]" style={{ color: "#3F3F46" }}>
          We read every submission before replying. If there's a clear fit,
          we'll suggest a time for a call.
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
            placeholder="Jane Smith"
            className={inputClass}
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
            onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
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
            placeholder="Acme Inc."
            className={inputClass}
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
            onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          Company stage
        </label>
        <select
          required
          value={form.stage}
          onChange={set("stage")}
          className="w-full h-11 rounded border px-4 text-[14px] bg-white focus:outline-none transition-colors appearance-none"
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
        >
          <option value="" disabled>
            Select your stage
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
          What's your main growth challenge right now?
        </label>
        <textarea
          required
          value={form.challenge}
          onChange={set("challenge")}
          placeholder="Describe where you're stuck or what you're trying to figure out..."
          rows={4}
          className="w-full rounded border px-4 py-3 text-[14px] bg-white focus:outline-none transition-colors resize-none"
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
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
          placeholder="Referral, LinkedIn, Google..."
          className={inputClass}
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Request a call
      </Button>

      <p className="text-[12px] text-center" style={{ color: "#A1A1AA" }}>
        We reply within one business day. No pitch decks, no hard sell.
      </p>
    </form>
  );
}
