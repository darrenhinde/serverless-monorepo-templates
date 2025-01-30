import Google from "next-auth/providers/google";
import { sendVerificationEmail } from "./sendVerificationEmail";
import { Provider } from "next-auth/providers";
import { Resource } from "sst";

export const providers: Provider[] = [
  Google({
    allowDangerousEmailAccountLinking: true,
    clientId: Resource.AUTH_GOOGLE_ID.value,
    clientSecret: Resource.AUTH_GOOGLE_SECRET.value,
  }),
  // Slack,
  // Twitter,
  // Reddit,
  // LinkedIn,
  // Facebook,
  // etc.

  {
    id: "http-email",
    name: "Email",
    type: "email",
    maxAge: 60 * 60 * 24, // Link will expire in 24 hours
    sendVerificationRequest: sendVerificationEmail,
    from: `${Resource.TRANSACTIONAL_MAIL_LOCAL_PART.value}@${Resource.TransactionalEmailIdentity.sender}`,
    options: {},
  },
];
