"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-[15px] font-medium" style={{ color: "#16A34A" }}>
        Check your inbox — the guide is on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-[480px] mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 h-11 rounded border px-4 text-[14px] bg-white focus:outline-none transition-colors"
        style={{
          borderColor: "#E4E4E7",
          color: "#0A0A0A",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#5A4FCF")}
        onBlur={(e) => (e.target.style.borderColor = "#E4E4E7")}
      />
      <Button type="submit">
        Get the Guide
      </Button>
    </form>
  );
}
