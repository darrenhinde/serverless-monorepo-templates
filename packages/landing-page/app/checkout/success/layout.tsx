import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function CheckoutSuccessLayout({ children }: { children: any }) {
  return <>{children}</>;
}