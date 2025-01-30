# Functions

The `functions` folder is dedicated to housing the code for your AWS Lambda functions. This separation allows for a clean and organized project structure.

## Purpose

- **Lambda Function Code**: This folder contains the handlers for your Lambda functions.
- **Lightweight Handlers**: Functions here should be relatively simple, primarily acting as entry points.
- **Integration with Core Logic**: These functions typically call into more complex business logic defined in `packages/core`.

## Current Contents

At present, this folder contains two main Lambda function handlers:

1. **auth/users.ts**
   - Handles streams from the Auth DynamoDB table (managed by Auth.js)
   - Pushes new user data to the main application DynamoDB table

2. **billing/webhooks.ts**
   - Processes incoming webhooks from Stripe
   - Identifies the event type
   - Calls appropriate business logic from the `packages/core` folder

## Best Practices

- Keep Lambda function code in this folder concise and focused
- Implement complex business logic in `packages/core`
- Use this structure to maintain a clear separation of concerns in your serverless application

By following this organization, you can easily manage and scale your Lambda functions while keeping your core business logic centralized and reusable.