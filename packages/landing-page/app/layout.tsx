import '@mantine/core/styles.css';
import '../global.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme/theme';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar';
import { FooterSection } from '../sections/FooterSection/FooterSection';
import { CSPostHogProvider } from './providers';
import { CookiesDialog } from '@/components/Cookies/CookiesDialog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Name: Brief Product Description',
  description:
    'A concise description of your product or service. Highlight key benefits or features.',
  keywords: 'keyword1, keyword2, keyword3, keyword4, keyword5, keyword6',
  openGraph: {
    images: [{ url: 'https://example.com/share-image.png' }],
    url: 'https://example.com/',
  },
  twitter: {
    creator: '@twitter_handle',
    card: 'summary_large_image',
    images: ['https://example.com/share-image.png'],
  },
  alternates: {
    canonical: 'https://example.com/',
  },
  applicationName: 'Product Name',
  other: {
    'msapplication-TileColor': '#000000',
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" defaultColorScheme="dark" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <CSPostHogProvider>
        <body>
          <MantineProvider forceColorScheme="dark" theme={theme}>
            <NavigationBar />
            {children}
            <FooterSection />
            <CookiesDialog />
          </MantineProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
