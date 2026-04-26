"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const inputClass =
  "w-full h-11 rounded border px-4 text-[14px] bg-white focus:outline-none transition-colors";
const labelClass = "block text-[13px] font-semibold mb-1.5";
const fieldStyle = { borderColor: "#E4E4E7", color: "#0A0A0A" };

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8">
        <p className="text-[20px] font-bold mb-2" style={{ color: "#0A0A0A" }}>
          Message received.
        </p>
        <p className="text-[15px]" style={{ color: "#3F3F46" }}>
          We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
        />
      </div>
      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={inputClass}
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
        />
      </div>
      <div>
        <label className={labelClass} style={{ color: "#0A0A0A" }}>
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What can we help with?"
          rows={5}
          className="w-full rounded border px-4 py-3 text-[14px] bg-white focus:outline-none transition-colors resize-none"
          style={fieldStyle}
          onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
          onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Send message
      </Button>
    </form>
  );
}
