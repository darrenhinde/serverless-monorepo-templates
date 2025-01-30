# ⚡️ Serverless Monorepo Template

A comprehensive, production-ready monorepo template for building and deploying scalable SaaS applications on AWS. This template follows best practices for maintainable, type-safe, and efficient development workflows.

## 🎯 Overview

This monorepo is structured to support multiple applications and services while sharing common code, configurations, and infrastructure definitions. It provides a robust foundation for building complex serverless applications with a focus on developer experience and code quality.

## 📂 Repository Structure

```
├── apps/                # Application directories
│   ├── web/            # Next.js web application
│   └── docs/           # Documentation site
├── packages/           # Shared packages and utilities
│   ├── core/           # Core business logic and types
│   └── ui/             # Shared UI components
└── infra/             # Infrastructure as Code (SST)
```

## 📡 Technology Stack

### Core Infrastructure
- [**SST**](https://docs.sst.dev/what-is-sst): Infrastructure as Code for AWS with superior developer experience
- [**Next.js 14**](https://nextjs.org/): React framework with App Router and server components
- [**DynamoDB**](https://aws.amazon.com/dynamodb/): Serverless NoSQL database
- [**S3**](https://aws.amazon.com/s3/): Object storage for public and private assets
- [**SES**](https://aws.amazon.com/ses/): Transactional email service

### Type Safety & API Layer
- [**TypeScript**](https://www.typescriptlang.org/): End-to-end type safety
- [**tRPC**](https://trpc.io/docs): Type-safe API communication
- [**Zod**](https://zod.dev/): Runtime schema validation with static types

### Frontend & UI
- [**Mantine**](https://mantine.dev/): Modern React component library
- [**React Email**](https://react.email/): Email template system
- [**Nextra**](https://nextra.site/): Documentation framework

### Integrations
- [**Stripe**](https://stripe.com/): Payment processing and subscription management
- [**PostHog**](https://posthog.com/): Product analytics and feature flags
- [**Auth.js**](https://authjs.dev/): Authentication with Magic Links and OAuth

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/serverless-monorepo-template.git
```

2. Install dependencies
```bash
pnpm install
```

3. Set up your environment variables
```bash
cp .env.example .env.local
```

4. Start the development environment
```bash
pnpm dev
```

## 💻 Development Workflow

### Key Principles
- Functional programming approach
- Type-safe development
- Modular and maintainable code
- Comprehensive testing strategy

### Commands
- `pnpm dev`: Start development environment
- `pnpm test`: Run test suite
- `pnpm build`: Build all applications
- `pnpm deploy`: Deploy to AWS

## 🔒 Security & Best Practices

- Strict TypeScript configuration
- Comprehensive error handling
- Input validation and sanitization
- Secure authentication flows
- AWS best practices implementation

## 🔐 Secrets Management

### Development Secrets
SST provides a built-in secrets manager that allows you to securely store and access sensitive information. Secrets are encrypted and stored in your AWS account using AWS SSM Parameter Store.

```bash
# Set a secret
pnpm sst secrets set STRIPE_SECRET_KEY sk_test_xxx

# Remove a secret
pnpm sst secrets remove STRIPE_SECRET_KEY

# List all secrets
pnpm sst secrets list
```

### Loading Secrets by Stage
You can load all secrets for a specific stage at once using the SST CLI:

```bash
# Load secrets for development stage
npx sst secrets load .env.development

# Load secrets for production stage
npx sst secrets load .env --stage production

# Load secrets for any custom stage
npx sst secrets load .env.{YOUR_STAGE_NAME}
```

### Environment Variables Structure
The project uses a hierarchical approach to environment variables:

```
├── .env.example          # Template for required environment variables
├── .env.local           # Local development overrides (git-ignored)
├── .env.development     # Development stage variables (git-ignored)
└── .env.production      # Production stage variables (git-ignored)
```

### Infrastructure Integration
- All environment variables are managed through the `infra/secrets.ts` file
- Never add `.env` files to individual packages
- Access secrets in your Next.js apps:
  ```typescript
  // Server-side
  import { Resource } from "sst";
  const mySecret = Resource.MySecret.value;
  
  // Client-side (prefix with NEXT_PUBLIC_)
  const publicValue = process.env.NEXT_PUBLIC_SOME_VALUE;
  ```

### Key Secret Categories
- **AWS Credentials**: AWS access keys and region configuration
- **Authentication**: Auth.js secret and OAuth provider credentials
- **Payment Processing**: Stripe public and secret keys
- **Analytics**: PostHog API keys
- **Email Service**: AWS SES credentials
- **Database**: DynamoDB access configurations

### Best Practices
- Never commit secrets to version control
- Use different secrets for development and production
- Rotate secrets regularly
- Follow the principle of least privilege
- Use SST's built-in secrets management for AWS deployments
- Centralize all secret management in the `infra/` directory
- Prefix client-side variables with `NEXT_PUBLIC_` in infrastructure code

## 🛠 Local Development

### Prerequisites
- Node.js 18 or higher
- AWS CLI installed and configured
- pnpm installed globally (`npm install -g pnpm`)
- AWS IAM user with appropriate permissions (see AWS Setup section)

### Starting Local Development
1. Start the development environment:
```bash
pnpm dev
```
This will:
- Start SST in development mode
- Launch the Next.js development server
- Set up local API endpoints
- Configure live Lambda function development

### Local Development Features
- Live Lambda reloading
- Local API Gateway
- Local DynamoDB for testing
- Automatic environment variable loading
- Hot module replacement for frontend

## 🚀 Production Deployment

### Prerequisites
- AWS account with appropriate permissions
- Domain name (if using custom domains)
- Production environment variables configured

### Deployment Steps
1. Load production secrets:
```bash
npx sst secrets load .env.production --stage production
```

2. Deploy to production:
```bash
pnpm deploy --stage production
```

### Production Features
- Automatic SSL certificate provisioning
- CDN distribution for static assets
- Database backups
- Logging and monitoring setup
- Error tracking integration

### Deployment Stages
- `development`: For development team
- `staging`: For QA and testing
- `production`: For live environment

## ⚙️ AWS Setup

### Required AWS Permissions
Your AWS IAM user/role needs permissions for:
- Lambda
- API Gateway
- DynamoDB
- S3
- CloudFormation
- CloudWatch
- IAM
- SSM (for secrets)
- Route53 (for custom domains)
- Certificate Manager (for SSL)

### Recommended IAM Policy
Create an IAM user with:
- `AdministratorAccess` (for initial setup)
- Or use this minimal policy set:
  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "cloudformation:*",
          "lambda:*",
          "apigateway:*",
          "dynamodb:*",
          "s3:*",
          "iam:*",
          "ssm:*",
          "route53:*",
          "acm:*",
          "cloudwatch:*",
          "ses:*"
        ],
        "Resource": "*"
      }
    ]
  }
  ```

### AWS Configuration
1. Create an AWS account
2. Install AWS CLI
3. Configure AWS credentials:
```bash
aws configure
```

### Best Practices
- Use separate AWS accounts for development and production
- Follow the principle of least privilege
- Enable MFA for all IAM users
- Regularly rotate access keys
- Use AWS Organizations for account management
- Enable CloudTrail for audit logging

## 📚 Documentation

- [Development Guide](./docs/development.md)
- [Deployment Guide](./docs/deployment.md)
- [Architecture Overview](./docs/architecture.md)
- [Contributing Guidelines](./CONTRIBUTING.md)



