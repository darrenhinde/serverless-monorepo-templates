import Stripe from "stripe";
import { sendEmail } from "../aws/sendEmail";
import { render } from "@react-email/components";
import { CheckoutCompleted } from "@nextsystems/transactional/emails/CheckoutCompleted";
import { Resource } from "sst";

const stripe = new Stripe(Resource.STRIPE_SECRET_KEY.value);

/**
 * @description
 * Handles the business logic for a checkout session completed event coming from a Stripe Webhook
 * In this case, we send a success email to the customers, but this could be the place for you to create a user in the database and provision your paywalled services
 */
export const handleCheckoutSessionCompleted = async (
  session: Stripe.Checkout.Session
) => {
  const retrievedSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"],
  });

  const email = retrievedSession.customer_details?.email;
  const name = retrievedSession.customer_details?.name;

  if (!email) {
    throw new Error("No email found");
  }

  const customerName = name || email;

  try {
    await sendEmail({
      to: email,
      subject: "Your checkout session has been completed",
      body: render(CheckoutCompleted({ customerName })),
    });
  } catch (error) {
    console.error(error);
  }
};
