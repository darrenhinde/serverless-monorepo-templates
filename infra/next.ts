/**
 * This file is responsible for deploying your Next.js applications. It manages
 * all the necessary resources for the Next.js apps in a single file, making it easier to
 * maintain and it includes configurations for both the main Next.js SaaS app as well as the separate Next.js landing page.
 *
 * The Nextjs component from SST simplifies the deployment of Next.js applications by
 * handling the build and deployment process, and optionally configuring a custom domain.
 * It integrates seamlessly with AWS services, providing a robust and scalable solution
 * for hosting server-side rendered (SSR) and static sites, without having to use expensive services like Vercel.
 *
 * Under the hood it uses open-next to build and deploy the Next.js apps in a similar fashion like Vercel does
 * (in the background they use AWS as well, they just abstract it away and let you pay for it).
 */

import { api } from "./api";
import { authLinkable } from "./auth";
import { bucket } from "./buckets";
import { primaryTable } from "./dynamo";
import { emailIdentity } from "./email";
import {
  AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET,
  AUTH_SECRET,
  AUTH_URL,
  DOMAIN,
  POSTHOG_HOST,
  POSTHOG_KEY,
  REGION,
  stage,
  STRIPE_COUPON_100_OFF,
  STRIPE_COUPON_10_OFF,
  STRIPE_CUSTOMER_PORTAL_LINK,
  STRIPE_PRICE_BASIC,
  STRIPE_PRICE_PREMIUM,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
  TRANSACTIONAL_MAIL_LOCAL_PART,
} from "./secrets";

const getAppDomain = () => {
  if ($app.stage === "production") {
    return $interpolate`app.${DOMAIN.value}`;
  } else {
    return $interpolate`app.${$app.stage}.${DOMAIN.value}`;
  }
};

const getLandingPageDomain = () => {
  if ($app.stage === "production") {
    return DOMAIN.value;
  } else {
    return $interpolate`${$app.stage}.${DOMAIN.value}`;
  }
};

const getDocsDomain = () => {
  if ($app.stage === "production") {
    return $interpolate`docs.${$app.stage}.${DOMAIN.value}`;
  } else {
    return $interpolate`${$app.stage}.${DOMAIN.value}`;
  }
};
const docsDomain = getDocsDomain();

const landingPageDomain = getLandingPageDomain();

// Create a Next.js site for the landing page
export const landingPage = new sst.aws.Nextjs("LandingPage", {
  path: "packages/landing-page",
  domain: {
    name: landingPageDomain,
    dns: sst.aws.dns({ override: true }),
  },
  warm: 5, // keeps the server side lambdas warm for fast response times. Costs approx. 9ct per month for 5 warm instances.
  link: [
    STRIPE_SECRET_KEY,
    STRIPE_COUPON_100_OFF,
    STRIPE_PRICE_BASIC,
    STRIPE_PRICE_PREMIUM,
  ],
  environment: {
    // envs prefixed with NEXT_PUBLIC are available in the client
    NEXT_PUBLIC_STRIPE_COUPON_10_OFF: STRIPE_COUPON_10_OFF.value,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: STRIPE_PUBLISHABLE_KEY.value,
    NEXT_PUBLIC_REGION: REGION.value,
    NEXT_PUBLIC_POSTHOG_KEY: POSTHOG_KEY.value,
    NEXT_PUBLIC_POSTHOG_HOST: POSTHOG_HOST.value,
  },
});

const appDomain = getAppDomain();

// Create a Next.js site for the main app
export const mainApp = new sst.aws.Nextjs("MainApp", {
  path: "packages/main-app",
  domain: {
    name: appDomain,
    dns: sst.aws.dns({ override: true }),
  },
  warm: 1,
  link: [
    emailIdentity,
    DOMAIN,
    stage,
    TRANSACTIONAL_MAIL_LOCAL_PART,
    authLinkable,
    primaryTable,
    bucket,
    api,
    REGION,
    AUTH_URL,
    AUTH_SECRET,
    AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET,
  ],
  environment: {
    // envs prefixed with NEXT_PUBLIC are also available in client-side code of Next.js
    AUTH_SECRET: AUTH_SECRET.value, // required by Auth.js see https://authjs.dev/reference/nextjs
    AUTH_TRUST_HOST: "true", // required by Auth.js see https://authjs.dev/reference/core/errors#untrustedhost
    NEXT_PUBLIC_STAGE: $app.stage,
    NEXT_PUBLIC_APP_DOMAIN: appDomain,
    NEXT_PUBLIC_BUCKET: bucket.name,
    NEXT_PUBLIC_REGION: REGION.value,
    NEXT_PUBLIC_POSTHOG_KEY: POSTHOG_KEY.value,
    NEXT_PUBLIC_POSTHOG_HOST: POSTHOG_HOST.value,
    NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK: STRIPE_CUSTOMER_PORTAL_LINK.value,
  },
});


