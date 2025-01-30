import { UpdateUserSchema } from "@nextsystems/schemas/UserSchema";
import { UserEntity } from "../database/entities/UserEntity";

export const UserMutations = {
  update: async (request: UpdateUserSchema) => {
    const user = await UserEntity.update(request);

    return user;
  },
};
