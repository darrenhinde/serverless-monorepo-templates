import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { robots: { index: false } };

export default async function HomePage() {
  redirect("/dashboard");
}
