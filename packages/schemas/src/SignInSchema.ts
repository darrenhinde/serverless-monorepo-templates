import { object, string, z } from "zod";

export const SignInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
});

export type SignInSchema = z.infer<typeof SignInSchema>;
