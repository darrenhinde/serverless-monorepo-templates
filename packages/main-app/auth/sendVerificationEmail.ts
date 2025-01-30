import { EmailConfig } from "next-auth/providers";
import { render } from "@react-email/render";
import { SignInVerification } from "@nextsystems/transactional/emails/SignInVerification";
import { sendEmail } from "@nextsystems/core/src/aws/sendEmail";

export const sendVerificationEmail = async (
  params: Parameters<EmailConfig["sendVerificationRequest"]>[0]
) => {
  try {
    const { identifier: to, url } = params;

    await sendEmail({
      to,
      subject: `Sign in to nextsystems`,
      body: render(SignInVerification({ url })),
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send verification email");
  }
};
