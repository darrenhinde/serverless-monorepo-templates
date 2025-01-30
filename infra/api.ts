/**
 * This file is responsible for creating API endpoints at AWS that let you expose serverless lambda functions.
 * In our case we only really need one endpoint here, which will recieve and handle webhooks from Stripe.
 */

import { authTable } from "./auth";
import { primaryTable } from "./dynamo";
import { emailIdentity } from "./email";
import {
  DOMAIN,
  stage,
  STRIPE_PRICE_BASIC,
  STRIPE_PRICE_PREMIUM,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  TRANSACTIONAL_MAIL_LOCAL_PART,
} from "./secrets";

const domain = DOMAIN.value.apply((domain) => {
  if ($app.stage === "production") {
    return `api.${domain}`;
  }

  return `api-${$app.stage}.${domain}`;
});

export const api = new sst.aws.ApiGatewayV2("Api", {
  domain: {
    name: domain,
    dns: sst.aws.dns({ override: true }),
  },
  transform: {
    route: {
      handler: {
        link: [
          primaryTable,
          authTable,
          stage,
          DOMAIN,
          TRANSACTIONAL_MAIL_LOCAL_PART,
          emailIdentity,
          STRIPE_WEBHOOK_SECRET,
          STRIPE_SECRET_KEY,
          STRIPE_PRICE_BASIC,
          STRIPE_PRICE_PREMIUM,
          DOMAIN,
          TRANSACTIONAL_MAIL_LOCAL_PART,
        ],
      },
    },
  },
});

api.route(
  "POST /billing/webhooks", // Billing endpoint responsible for handling webhooks from Stripe
  "packages/functions/src/billing/webhooks.handler" // Path to the lambda function that will handle the webhooks
);
