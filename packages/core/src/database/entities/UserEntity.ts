import { Entity as ElectroEntity, EntityItem } from "electrodb";
import { Dynamo } from "../dynamo";
import {
  CreateUserSchema,
  UpdateUserSchema,
  UserSchema,
} from "@nextsystems/schemas/UserSchema";
import * as crypto from "crypto";
import { getCurrentEpochSeconds } from "../../utils/epochSeconds";
import { Equal, Expect } from "../../utils/types";

/**
 * See `./EmployeeEntity.ts` for more information on how to use ElectroDB
 */
export const Entity = new ElectroEntity(
  {
    model: {
      service: "userManagement",
      entity: "user",
      version: "1",
    },

    attributes: {
      id: {
        type: "string",
        required: true,
        default: crypto.randomUUID,
      },
      name: {
        type: "string",
        required: false,
      },
      image: {
        type: "string",
        required: false,
      },
      email: {
        type: "string",
        required: true,
      },
      createdAt: {
        type: "number",
        required: true,
        default: getCurrentEpochSeconds,
      },
    },

    indexes: {
      byId: {
        pk: {
          field: "PK",
          composite: ["id"],
        },
        sk: {
          field: "SK",
          composite: [],
        },
      },

      byEmail: {
        index: "GSI1",
        pk: {
          field: "GSI1PK",
          composite: ["email"],
        },
        sk: {
          field: "GSI1SK",
          composite: [],
        },
      },
    },
  },
  Dynamo.Service
);

type _ = Expect<Equal<UserSchema, EntityItem<typeof Entity>>>;

export const findWithId = async (id: string) => {
  const res = await Entity.get({ id }).go();

  return res.data;
};

export const findWithEmail = async (email: string) => {
  const res = await Entity.query.byEmail({ email }).go();

  return res.data;
};

export const update = async (request: UpdateUserSchema) => {
  const { id, ...updates } = request;

  const res = await Entity.update({ id }).set(updates).go();

  return res.data;
};

export const build = (
  user: CreateUserSchema,
  id?: string,
  createdAt?: number
) => {
  const mock = Entity.create({ ...user, id, createdAt }).params().Item;

  return UserSchema.parse(mock);
};

export const create = async (user: UserSchema) => {
  return await Entity.create(user).go();
};

export * as UserEntity from "./UserEntity";
