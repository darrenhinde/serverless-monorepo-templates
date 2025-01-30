import { object, string, z } from "zod";

export const NewsletterSignupSchema = object({
  name: string().optional(),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  allowMarketing: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

export type NewsletterSignupSchema = z.infer<typeof NewsletterSignupSchema>;
