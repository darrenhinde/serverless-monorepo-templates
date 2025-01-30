import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
export * as Dynamo from "./dynamo";
import { Resource } from "sst";

export const Client = new DynamoDBClient({ region: Resource.REGION.value });

export const DocumentClient = DynamoDBDocumentClient.from(Client, {
  marshallOptions: { removeUndefinedValues: true },
});

export const Service = {
  client: DocumentClient,
  table: Resource.PrimaryTable.name,
};
