import { DynamoDBStreamEvent } from "aws-lambda";
import { unmarshall as createJSObjectFromDynamoRecord } from "@aws-sdk/util-dynamodb";
import { UserEntity } from "@nextsystems/core/database/entities/UserEntity";
import { getEpochSecondsFromDateString } from "@nextsystems/core/utils/epochSeconds";

export const upsertUserFromAuthTableStream = async ({
  Records,
}: DynamoDBStreamEvent) => {
  for (const record of Records) {
    const newImage = record.dynamodb?.NewImage;
    const oldImage = record.dynamodb?.OldImage;

    if (!newImage && !oldImage) continue;

    const payload = createJSObjectFromDynamoRecord(
      (newImage ? newImage : oldImage) as any
    );

    // We are only interested in adding new signed up users to the database
    if (payload.type !== "USER") continue;
    if (record.eventName !== "INSERT") continue;

    try {
      const createdAt = payload.emailVerified
        ? getEpochSecondsFromDateString(payload.emailVerified)
        : undefined;

      const userToCreate = UserEntity.build(
        { email: payload.email, image: payload.image, name: payload.name },
        payload.id,
        createdAt
      );

      const createdUser = await UserEntity.create(userToCreate);

      console.log("New user added to DynamoDB", createdUser);
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
};
