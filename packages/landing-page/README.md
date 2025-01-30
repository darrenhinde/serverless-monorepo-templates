# Landing Page

This package in our monorepo houses a full Next.js 14 project for our landing page and documentation. It utilizes both the app router for the main landing page and the pages router for the documentation setup.

## Key Features

- **Next.js 14**: Leverages the latest features of Next.js, including the app router.
- **Mantine**: Uses Mantine as the primary component library and styling framework.
- **Stripe Integration**: Handles checkout processes with Stripe.
- **Documentation**: Utilizes the pages router for a comprehensive documentation setup.

## Project Structure

### Theming

We use Mantine's theming capabilities, configured in `theme/theme.ts`. This file sets up our color schemes and default styles for all components.

### Components

The `/components` folder contains a variety of pre-built components used throughout the landing page:

- Pricing cards
- Headers and footers
- Cookie banners
- Testimonial cards
- And more...

These components are designed to be easily reused and modified to suit your specific needs.

### Hooks

The `hooks` folder includes pre-built custom hooks:

- GDPR-compliant cookie consent banner handling
- Stripe checkout session management

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
