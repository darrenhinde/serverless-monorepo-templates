# Packages

This directory houses almost everything that powers our SaaS application, except for the infrastructure code which is located in the "stacks" folder. Our monorepo is structured into several packages, each serving a specific purpose in the overall architecture of the application.

## Overview of Packages

### Core

The core package is the central hub for all business logic in our SaaS application. It facilitates domain-driven design and maintains a clear separation of concerns.

- Houses all business logic
- Separates business logic from API and Lambda functions
- Implements all application functionalities

### Functions

This package contains the code for our AWS Lambda functions, providing a clean and organized structure for serverless operations.

- Houses Lambda function handlers
- Implements lightweight handlers as entry points
- Calls into core logic defined in packages/core

### Landing Page

This package contains a full Next.js 14 project for our landing page and documentation.

- Utilizes Next.js 14 with app router
- Uses Mantine as the primary component library
- Handles Stripe integration for checkout processes
- Includes a documentation website using the pages router and markdown

### Main App

This package houses the main SaaS application built with Next.js 14 and the App Router.

- Implements Next.js 14 with App Router
- Provides authentication using Auth.js
- Utilizes tRPC for type-safe API interactions
- Uses Mantine for UI components and styling
- Includes pre-built components and pages

### Schemas

This package serves as the single source of truth for business objects and their types.

- Centralizes schema definitions using Zod
- Exports TypeScript types inferred from Zod schemas
- Ensures consistency and reduces duplication across the codebase

### Transactional

This package contains email templates for transactional emails used throughout the application.

- Uses React Email for custom styled email templates
- Maintains consistency with the application's design
- Allows easy updating and version control of email templates
- Provides type-safe email template development


## Summary

By organizing our codebase into these packages, we ensure a modular, maintainable, and scalable architecture for our SaaS application. Each package has its specific role, contributing to the overall functionality and developer experience of the project.