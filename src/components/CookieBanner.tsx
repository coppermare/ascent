"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/Button";

const subscribe = () => () => {};
const getConsent = () => localStorage.getItem("cookie-consent");
const getServerConsent = () => null;

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);
  const [dismissed, setDismissed] = useState(false);

  if (consent || dismissed) return null;

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setDismissed(true);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setDismissed(true);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[14px] max-w-xl" style={{ color: "var(--body-text)" }}>
          We use cookies to understand how visitors use our site and to improve
          your experience. By continuing, you agree to our use of cookies.{" "}
          <a
            href="/privacy"
            className="underline hover:opacity-70"
            style={{ color: "var(--heading)" }}
          >
            Privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="secondary" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
