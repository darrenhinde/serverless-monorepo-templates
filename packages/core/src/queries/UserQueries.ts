import {
  GetUserByEmailSchema,
  GetUserByIdSchema,
} from "@nextsystems/schemas/UserSchema";
import { UserEntity } from "../database/entities/UserEntity";

export const UserQueries = {
  getById: async ({ id }: GetUserByIdSchema) => {
    const user = await UserEntity.findWithId(id);

    return user;
  },

  getByEmail: async ({ email }: GetUserByEmailSchema) => {
    const user = await UserEntity.findWithEmail(email);

    return user;
  },
};
