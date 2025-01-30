import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resource } from 'sst';

const stripe = new Stripe(Resource.STRIPE_SECRET_KEY.value);

export async function POST(request: Request) {
  try {
    const { product } = await request.json();

    const price = getPriceId(product);
    const coupon = getCouponId(product);

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price, quantity: 1 }],
      discounts: coupon ? [{ coupon }] : [],
      allow_promotion_codes: coupon ? undefined : true,
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/checkout/success`,
      cancel_url: `${request.headers.get('origin')}/checkout/canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const getPriceId = (product: string | null): string | undefined => {
  switch (product) {
    case 'premium':
      return Resource.STRIPE_PRICE_BASIC.value;
    case 'exclusive':
      return Resource.STRIPE_PRICE_PREMIUM.value;
    default:
      throw new Error('Invalid product type');
  }
};

const getCouponId = (product: string | null): string | undefined => {
  switch (product) {
    case 'exclusive':
      return Resource.STRIPE_COUPON_100_OFF.value;
    default:
      return undefined;
  }
};
