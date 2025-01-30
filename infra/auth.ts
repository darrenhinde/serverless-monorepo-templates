/**
 * This file is responsible for setting up the authentication-related infrastructure on AWS.
 *
 * We will be using Auth.js (https://authjs.dev/) for authentication.
 * For it to work, we will set up a DynamoDB table that will be used to store user authentication data like tokens, sessions usernames etc.
 * You will not interact with this table directly, it will be fully managed by Auth.js.
 */

import { primaryTable } from "./dynamo";
import { REGION } from "./secrets";

// This table will be used by Auth.js to store user authentication data
export const authTable = new sst.aws.Dynamo("AuthTable", {
  ttl: "expires",
  fields: {
    pk: "string",
    sk: "string",
    GSI1PK: "string",
    GSI1SK: "string",
  },
  primaryIndex: { hashKey: "pk", rangeKey: "sk" },
  stream: "new-and-old-images",
  transform: {
    table: (args) => {
      args.billingMode = "PAY_PER_REQUEST";
      args.name = `next-auth-${$app.stage}`;

      // According to Auth.js docs, we need to add this global secondary index to the table (see https://authjs.dev/getting-started/adapters/dynamodb)
      args.globalSecondaryIndexes = [
        {
          name: "GSI1",
          hashKey: "GSI1PK",
          rangeKey: "GSI1SK",
          projectionType: "ALL",
        },
      ];
    },
  },
});

/**
 * Since we want the above table to only be used by Auth.js,
 * we will use DynamoDBs capability to automatically stream changes in the auth table to our primary application table that we defined in the DynamoStack.
 *
 * This is a super useful feature that you can use for many different purposes, for example
 *  - Syncing data between tables
 *  - Triggering lambda functions on data changes
 *  - Pushing data to Full-Text Search engines like Elasticsearch, Meilisearch, etc.
 *  - Pushing data to analytics tools like Mixpanel, Segment, etc.
 *  - etc.
 */
authTable.subscribe({
  handler: "packages/functions/src/auth/users.upsertUserFromAuthTableStream", // path to the lambda function handler code
  link: [authTable, primaryTable, REGION], // Giving the lambda permissions to write to the primary table
  timeout: "1 minute", // Configuring a timeout for the lambda function
});

// Create IAM user with necessary permissions to allow Auth.js programmatic access to the table
export const authUser = new aws.iam.User("AuthUser", {
  name: `auth-user-${$app.stage}`,
});

export const policy = new aws.iam.Policy("AuthUserPolicy", {
  policy: {
    Statement: [
      {
        Effect: "Allow",
        Action: [
          "dynamodb:BatchGetItem",
          "dynamodb:BatchWriteItem",
          "dynamodb:Describe*",
          "dynamodb:List*",
          "dynamodb:PutItem",
          "dynamodb:DeleteItem",
          "dynamodb:GetItem",
          "dynamodb:Scan",
          "dynamodb:Query",
          "dynamodb:UpdateItem",
        ],
        Resource: [authTable.arn, $interpolate`${authTable.arn}/index/GSI1`],
      },
    ],
    Version: "2012-10-17",
  },
});

export const policyAttachment = new aws.iam.UserPolicyAttachment(
  "AuthUserPolicyAttachment",
  {
    user: authUser.name,
    policyArn: policy.arn,
  }
);

// This will create an access key to the Dynamo table that needs to be passed to Auth.js
export const accessKey = new aws.iam.AccessKey("AuthUserAccessKey", {
  user: authUser.name,
});

/**
 * This will create a linkable object that will be used to pass to our Next.js app,
 * so that it can use the above access key to authenticate with Auth.js
 */
export const authLinkable = new sst.Linkable("AuthCredentials", {
  properties: {
    accessKeyId: accessKey.id,
    secretAccessKey: accessKey.secret,
    region: REGION.value,
  },
});
