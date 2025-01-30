"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

type CookieConsent = "yes" | "no" | "undecided" | null;

const getCookieConsent = (): "yes" | "no" | "undecided" | null => {
  if (typeof window === "undefined") {
    return null;
  }

  if (!localStorage.getItem("cookie_consent")) {
    return "undecided";
  }
  return localStorage.getItem("cookie_consent") as CookieConsent;
};

if (typeof window !== "undefined") {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  if (key) {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "always",
      persistence:
        getCookieConsent() === "yes" ? "localStorage+cookie" : "memory",
    });
  }
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
