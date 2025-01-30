/**
 * This file is responsible for setting up an AWS S3 Storagebucket.
 * An S3 bucket is a highly scalable, durable, and secure file storage service provided by AWS
 * You can use this bucket to store assets such as images, videos, and other files.
 *
 * Additionally we set the CORS settings here.
 * By default, S3 does not allow its resources to be accessed from a different domain.
 * However, CORS defines a way for client web applications that are loaded in one domain
 * to interact with resources in a different domain.
 */

import { DOMAIN } from "./secrets";

const origin = $interpolate`https://app.${DOMAIN.value}`;

// This is a bucket that may only be accessed from your main app for user file uploads
export const bucket = new sst.aws.Bucket("Assets", {
  public: true,
  cors: {
    maxAge: "1 day",
    allowHeaders: ["*"],
    allowOrigins: [origin, "http://localhost:3000"],
    allowMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
  },
});

// This is a bucket that may be accessed from any origin and can be used to serve public assets on your landing page for example
export const publicBucket = new sst.aws.Bucket("PublicAssets", {
  public: true,
  cors: {
    maxAge: "1 day",
    allowHeaders: ["*"],
    allowOrigins: ["*"],
    allowMethods: ["GET", "HEAD"],
  },
});
