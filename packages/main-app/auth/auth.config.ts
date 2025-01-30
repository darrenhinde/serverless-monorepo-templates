import { providers } from "./auth-providers";
import { NextAuthConfig } from "next-auth";

export default {
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    error: "/sign-in",
    verifyRequest: "/sign-in-email-sent",
    newUser: "/dashboard",
  },
  providers,
  basePath: "/api/auth",
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth; // Logged in users are authenticated, otherwise redirect to login page
    },
  },
} satisfies NextAuthConfig;
