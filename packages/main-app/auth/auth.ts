import NextAuth from "next-auth";
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
import { Resource } from "sst";
import authConfig from "./auth.config";

const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: Resource.AuthCredentials.accessKeyId,
    secretAccessKey: Resource.AuthCredentials.secretAccessKey,
  },
  region: Resource.REGION.value,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DynamoDBAdapter(client, {
    tableName: `next-auth-${Resource.Stage.stage || process.env.NEXT_PUBLIC_STAGE}`,
  }),
  ...authConfig,
});
