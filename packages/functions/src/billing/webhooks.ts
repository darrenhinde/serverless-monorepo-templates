import Stripe from "stripe";
import { handleCheckoutSessionCompleted } from "@nextsystems/core/billing/handleCheckoutSessionCompleted";
import { Resource } from "sst";
import { ApiHandler } from "src/handler";

const stripe = new Stripe(Resource.STRIPE_SECRET_KEY.value);

/**
 * @description
 * Lambda function handler to handle Stripe webhooks.
 *
 * This function verifies the Stripe webhook signature, parses the event,
 * and calls the business logic to handle the event from the packages/core folder.
 */
export const handler = ApiHandler(async (event) => {
  // Check that the webhook actually came from Stripe
  const sig = event.headers["stripe-signature"];
  const webhookSecret = Resource.STRIPE_WEBHOOK_SECRET.value;

  if (!sig || !webhookSecret) {
    return "Missing stripe-signature or stripe-webhook-secret";
  }

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body!,
      sig,
      webhookSecret
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed.`, err);

    throw new Error(`Webhook Error: ${err.message}`);
  }

  // Handle business logic for each event type
  switch (stripeEvent.type) {
    case "checkout.session.completed": {
      const session = stripeEvent.data.object;

      await handleCheckoutSessionCompleted(session);

      break;
    }

    default: {
      console.log(`Unhandled event type ${stripeEvent.type}`);
    }
  }

  return JSON.stringify({ received: true });
});
