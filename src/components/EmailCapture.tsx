"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to email service
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 0);
  };

  if (submitted) {
    return (
      <p className="text-[15px] font-medium text-[#16A34A]">
        Check your inbox — the guide is on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-[480px]"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full min-w-0 flex-1 h-12 min-h-[48px] rounded-md border px-4 text-[14px] bg-white transition-colors focus:outline-none focus:border-(--color-primary)"
        style={{
          borderColor: "#E4E4E7",
          color: "#0A0A0A",
        }}
      />
      <Button type="submit" size="lg" className="w-full shrink-0 sm:w-auto" disabled={loading}>
        {loading ? "Sending…" : "Get guide"}
      </Button>
    </form>
  );
}
