# Main SaaS Application

This package houses the main SaaS application built with Next.js 14 and the App Router. It provides a robust starting point for your SaaS project with several key features and pre-built components.

## Key Features

- **Next.js 14**: Utilizes the latest features of Next.js, including the App Router.
- **Authentication**: Fully functional authentication setup using [Auth.js](https://authjs.dev/) (formerly NextAuth.js).
  - Magic link email sign-in
  - Social sign-in with 50+ OAuth providers
- **tRPC**: Implements a type-safe tRPC client for seamless interaction with backend endpoints.
- **Mantine**: Uses Mantine as the primary component library and styling framework.
- **Pre-built Components**: Includes several pre-built pages and components as starting points.

## Authentication

The application uses Auth.js for a comprehensive authentication solution. This includes:
- Email sign-in with magic links
- Social sign-in with over 50 OAuth providers
- Secure session management

For more information, visit the [Auth.js documentation](https://authjs.dev/getting-started/introduction).

## tRPC Integration

A type-safe tRPC client is implemented for client-side interaction with backend endpoints. Key points:
- Endpoints are set up in the `packages/core` folder
- All tRPC endpoints are secured by Auth.js authentication
- Provides seamless, type-safe communication between frontend and backend

## Pre-built Components

The application includes several pre-built components and pages to accelerate development:
- Sign-in screens
- App dashboard with example statistics
- Table component with infinite scroll and virtualization
- Example tRPC calls for adding/removing employees in the table

## Custom Hooks

Several custom hooks are provided:
- GDPR-compliant cookie consent management
- Infinite scroll for Mantine tables
- File uploads to AWS S3 buckets (e.g., for employee avatar uploads)

## Theming

Mantine is used for styling and theming. Customize colors, default component props, and more in the `/theme/theme.ts` file.

## Product Analytics

The application includes an integration with [PostHog](https://posthog.com/) for comprehensive product analytics:

- Pre-configured setup for tracking user interactions and events
- Seamlessly integrated with the GDPR-compliant cookie consent system
- Ensures analytics data is only collected when user permissions are granted
- Provides valuable insights into user behavior and product usage

This integration allows you to make data-driven decisions while respecting user privacy and complying with GDPR regulations.

## Features

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
