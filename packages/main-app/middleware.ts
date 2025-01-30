import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth/auth.config";

// Lazily initializing the Auth object WITHOUT options that require a database adapter, because DB calls are not compatible with Edge-runtimes (ignore warnings in console and see https://authjs.dev/guides/edge-compatibility)
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // Allow the request to proceed if the user is authenticated
  if (req.auth) {
    return NextResponse.next();
  }

  // Redirect to /sign-in if the user is not authenticated
  const signInUrl = new URL("/sign-in", req.nextUrl.origin);
  return NextResponse.redirect(signInUrl);
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
