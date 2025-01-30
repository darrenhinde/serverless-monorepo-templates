/**
 * This file is responsible for setting variables that you can link to your infrastructure,
 * so that your application code can type-safely access them.
 *
 * Use the `npx sst secrets load .env.example` command to load the secrets from your .env file into these Linkable Secrets.
 *
 * @see https://sst.dev/docs/component/secret
 */

// General
export const DOMAIN = new sst.Secret("DOMAIN", "nextsystems.ai");
export const REGION = new sst.Secret("REGION", "eu-central-1");
export const stage = new sst.Linkable("Stage", {
  properties: { stage: $app.stage },
});

// Auth.js
export const AUTH_URL = new sst.Secret("AUTH_URL");
export const AUTH_SECRET = new sst.Secret("AUTH_SECRET"); // run `openssl rand -base64 32` to generate a new secret

// Social Sign In
export const AUTH_GOOGLE_ID = new sst.Secret("AUTH_GOOGLE_ID");
export const AUTH_GOOGLE_SECRET = new sst.Secret("AUTH_GOOGLE_SECRET");

// Stripe - Payments
export const STRIPE_PRICE_BASIC = new sst.Secret("STRIPE_PRICE_BASIC");
export const STRIPE_PRICE_PREMIUM = new sst.Secret("STRIPE_PRICE_PREMIUM");
export const STRIPE_PUBLISHABLE_KEY = new sst.Secret("STRIPE_PUBLISHABLE_KEY");
export const STRIPE_SECRET_KEY = new sst.Secret("STRIPE_SECRET_KEY");
export const STRIPE_COUPON_100_OFF = new sst.Secret("STRIPE_COUPON_100_OFF");
export const STRIPE_COUPON_10_OFF = new sst.Secret("STRIPE_COUPON_10_OFF");
export const STRIPE_WEBHOOK_SECRET = new sst.Secret("STRIPE_WEBHOOK_SECRET");
export const STRIPE_CUSTOMER_PORTAL_LINK = new sst.Secret(
  "STRIPE_CUSTOMER_PORTAL_LINK"
);

// Posthog - Analytics
export const POSTHOG_KEY = new sst.Secret("POSTHOG_KEY");
export const POSTHOG_HOST = new sst.Secret("POSTHOG_HOST");

// Emails
export const TRANSACTIONAL_MAIL_LOCAL_PART = new sst.Secret(
  "TRANSACTIONAL_MAIL_LOCAL_PART"
);
