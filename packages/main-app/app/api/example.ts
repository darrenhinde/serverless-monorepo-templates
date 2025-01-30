import { auth } from "@/auth/auth";
import { NextResponse } from "next/server";

/**
 * @describe
 * You can use the auth function to wrap an API route handler.
 * The request parameter will then have an auth key on it which you can check for a valid user session.
 */
export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);

  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
