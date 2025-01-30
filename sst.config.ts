/// <reference path="./.sst/platform/config.d.ts" />
import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "sst-ai-repo",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { aws: true },
    };
  },
  async run() {
    const dynamo = await import("./infra/dynamo");
    const secrets = await import("./infra/secrets");
    const buckets = await import("./infra/buckets");
    const auth = await import("./infra/auth");
    const email = await import("./infra/email");
    const api = await import("./infra/api");
    const next = await import("./infra/next");
    return {
      PrimaryTableName: dynamo.primaryTable.name,
      PrimaryTableArn: dynamo.primaryTable.arn,
      Bucketname: buckets.bucket.name,
      BucketArn: buckets.bucket.arn,
      PublicBucketname: buckets.publicBucket.name,
      PublicBucketArn: buckets.publicBucket.arn,
      AuthTableName: auth.authTable.name,
      AuthTableArn: auth.authTable.arn,
      AuthTableStreamArn: auth.authTable.nodes.table.streamArn,
      ApiEndpoint: api.api.url,
      LandingPageUrl: next.landingPage.url,
      MainAppUrl: next.mainApp.url,
      ContentCompassUrl: next.ContentCompass.url,
    };
  },
});
