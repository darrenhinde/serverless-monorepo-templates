import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src="/logos/nextsystems_logo.svg" width={28} height={28} alt="Logo" />
      <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.125rem' }}>your brand</span>
    </div>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="title" content="Company Name - Documentation" />
      <meta name="description" content="Company description goes here." />
      <meta name="keywords" content="keyword1, keyword2, keyword3" />
      <meta property="og:title" content="Company Name" />
      <meta property="og:description" content="Documentation" />
      <meta property="og:image" content="https://example.com/share-image.png" />
      <meta property="og:url" content="https://example.com/" />
      <meta name="twitter:creator" content="@twitter_handle" />
      <link rel="canonical" href="https://example.com/docs" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="Company Name" />
    </>
  ),
  darkMode: false,
  nextThemes: { defaultTheme: 'dark', forcedTheme: 'dark' },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: (
      <div style={{ display: 'flex', gap: '2rem', width: '100%', justifyContent: 'flex-end' }}>
        <a href="https://example.com/privacy-policy">Privacy policy</a>
        <a href="https://example.com/terms-of-service">Terms of service</a>
      </div>
    ),
  },
  feedback: {
    content: 'Share your feedback',
    useLink: () => 'https://example.com/feedback',
  },
  chat: {
    link: 'https://discord.gg/QepFYTtWdX',
    icon: (
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
        <path
          fill="#fff"
          d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
        />
      </svg>
    ),
  },
  editLink: { component: null },
  primaryHue: 62,
  primarySaturation: 70,
  useNextSeoProps: () => ({
    titleTemplate: '%s - Company Name Docs',
    description: 'Generic description for the documentation.',
    canonical: 'https://example.com/docs',
    openGraph: {
      type: 'website',
      url: 'https://example.com/docs',
      title: 'Company Name Documentation',
      description: 'Generic description for the documentation.',
      images: [
        {
          url: 'https://example.com/share-image.png',
          width: 800,
          height: 600,
          alt: 'Company Name Documentation',
        },
      ],
      site_name: 'Company Name Docs',
    },
    twitter: {
      handle: '@twitter_handle',
      site: '@twitter_handle',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'application-name',
        content: 'Company Name Docs',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
      {
        name: 'keywords',
        content: 'keyword1, keyword2, keyword3, keyword4',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  }),
};

export default config;
