# Core Package

The `packages/core` folder is a crucial component of our monorepo architecture, serving as the central hub for all business logic in our SaaS application. This structure facilitates domain-driven design and helps maintain a clear separation of concerns.

## Purpose

The core package is designed to:

1. House all business logic
2. Enable domain-driven design
3. Separate business logic from API and Lambda functions
4. Promote simple and maintainable code
5. Implement all application functionalities

## Current Structure and Implementations

### AWS Folder

Contains functions for interacting with AWS services:
- Storage bucket operations (presigned URLs for uploads and downloads)
- Email sending functionality using AWS SES

### Billing Folder

Handles business logic triggered by Stripe webhook events, such as completed checkout sessions.

### Database Folder

Houses the DynamoDB client and ElectroDB ORM:
- Defines business object entities
- Implements database access methods

### Queries and Mutations Folders

Contain the main business logic related to business object entities:

#### Queries
- Read-only operations that retrieve data
- Do not modify the database or application state
- Examples: fetching user profiles, listing items, searching for records

#### Mutations
- Write operations that modify data or application state
- Create, update, or delete records in the database
- Examples: creating a new user, updating a product, deleting an order

Both queries and mutations:
- Implement related business logic (data transformations, permission checks, third-party API calls)
- Interact with database entities defined in the Database folder
- Ensure data consistency and enforce business rules

### TRPC Folder

Sets up TRPC (see [tRPC docs](https://trpc.io/docs/introduction)) routes for frontend-backend communication.
TRPC is a TypeScript framework for building type-safe APIs without schemas or code generation. It enables seamless communication between your frontend and backend by leveraging TypeScript's type inference.

#### How tRPC works:
1. Define procedures (functions) on the backend
2. Create a router that groups these procedures
3. Generate a type-safe client for the frontend
4. Use the client to call backend procedures as if they were local functions

#### Implementation in our core package:
- Includes routes for employees, users, and storage
- Defines type-safe procedures for various operations
- Groups related procedures into subrouters (e.g., employeeRouter, userRouter)

#### Benefits of using tRPC:
1. Full type-safety: Catch errors at compile-time rather than runtime
2. Improved developer experience: Autocomplete and IntelliSense for API calls
3. Reduced boilerplate: No need for manual API documentation or schema definitions
4. Seamless integration: Works well with React, Next.js, and other TypeScript frameworks
5. Performance: Minimal runtime overhead compared to traditional REST or GraphQL APIs

By centralizing tRPC routes in the core package, we ensure consistent API definitions and maintain type safety across the entire application.


## Usage in Other Packages

The core package is designed to be imported and used by other packages within the monorepo. For example:

1. **Functions Package**: The `packages/functions` folder should contain lightweight Lambda handler code that calls into business logic functions imported from the core package.

2. **Main Application**: The Next.js main application should import queries and mutations from the core package to interact with the database and implement business logic.

By centralizing business logic in the core package, we ensure consistency, maintainability, and scalability across the entire application.