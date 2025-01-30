# Transactional Email Templates

The "transactional" folder of our monorepo contains the email templates for transactional emails used throughout the application. We use [React Email](https://react.email/) to create custom styled email templates right within our codebase.

## Overview

The transactional email templates in this folder allow us to:

1. Design emails using React components
2. Maintain consistency with our application's design
3. Easily update and version control our email templates
4. Use TypeScript for type-safe email template development

## Usage

Other packages in the monorepo can import these email components and use React Email's `render` method to convert them to simple HTML strings. These strings can then be passed into AWS SES to send out transactional emails from any place in our codebase.

Example

```typescript
await sendEmail({
  from,
  to,
  subject: "Sign in to Product",
  body: render(SignInVerification({ url })),
});
```


## Available Templates

### CheckoutCompleted.tsx

This template is sent to customers after a successful checkout. It includes:
- A welcome message
- Details about their purchase
- Next steps for getting started
- A clone command for accessing the repository

### SignInVerification.tsx

This template is used for email verification during the sign-in process. It includes:
- A sign-in button with a unique verification URL
- Instructions for completing the sign-in process
- Security information about the link's expiration

## Adding New Templates

To add a new email template:

1. Create a new `.tsx` file in the `emails` directory
2. Import necessary components from `@react-email/components`
3. Define your email template as a React component
4. Export the component for use in other parts of the application

## Testing and Development

You can test and visually inspect your email templates using the React Email preview functionality. To run the development server:

1. Navigate to the `transactional` package directory
2. Run the following command: `pnpm run dev`

This command starts a local server on port 5001. You can then view and interact with your email templates in your browser, making it easier to design and refine them.
