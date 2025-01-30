import { addSubscriber } from '@nextsystems/core/newsletter/addSubscriber';
import { NewsletterSignupSchema } from '@nextsystems/schemas/NewsletterSignupSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { email, name } = NewsletterSignupSchema.parse(data);

    await addSubscriber({ email, name });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
