// ElectroDB is a library for managing DynamoDB entities
import { Entity as ElectroEntity, EntityItem } from "electrodb";
import { Dynamo } from "../dynamo";
import {
  UpdateEmployeeSchema,
  EmployeeSchema,
  CreateEmployeeSchema,
} from "@nextsystems/schemas/EmployeeSchema";
import * as crypto from "crypto";
import { getCurrentEpochSeconds } from "../../utils/epochSeconds";
import { Equal, Expect } from "../../utils/types";

/**
 * @description
 * In ElectroDB an Entity represents a single business object.
 * In this case we use an entity to represent an employee item in our app.
 */
export const Entity = new ElectroEntity(
  {
    model: {
      service: "employees", // The name of the service that this entity belongs to. This helps in organizing entities within a larger application.
      entity: "employee", // The name of the entity. This should be a unique identifier for the entity within the service.
      version: "1", //  The version of the entity schema. This is useful for managing schema changes over time.
    },

    /**
     * @description
     * This sections defines the attributes for the Employee entity to be stored in our database
     */
    attributes: {
      id: {
        type: "string",
        required: true,
        default: crypto.randomUUID,
      },
      userId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      job: {
        type: "string",
        required: true,
      },
      email: {
        type: "string",
        required: true,
      },
      image: {
        type: "string",
        required: false,
      },
      createdAt: {
        type: "number",
        required: true,
        default: getCurrentEpochSeconds, // We use epoch seconds for storing times in our database so that we dont have to deal with timezones
      },
    },

    indexes: {
      /**
       * @description
       * DynamoDB requires you to think of your data access patterns in advance.
       * So here we define exactly what access patterns (indexes) we will need for our app.
       *
       * DynamoDB indexes are mechanisms to allow efficient querying of data and are added to the table in our infrastructure DynamoStack code.
       * You can define dozens of them on a single table, however, in most cases you will only need a few.
       *
       * There are two types of indexes: primary indexes (comprising the partition key and optional sort key)
       * and secondary indexes.
       *
       * The primary index is the main way to uniquely identify items in a table. It consists of a partition key (PK)
       * and an optional sort key (SK). In this code, the primary index is defined by the 'byId' index.
       *
       * We should be able to find the user by id or email.
       */
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

      /**
       * @description
       * The secondary index allows querying on non-primary key attributes.
       * The "Global Secondary Index" (GSI) can be created on any attribute and allows querying across the entire table.
       *
       * Here we use use our secondary index that we defined in our DynamoStack infrastructure code.
       * This will allow us to efficiently find all users associated with this accounts userId.
       */
      byUser: {
        index: "GSI1",
        pk: {
          field: "GSI1PK",
          composite: ["userId"],
        },
        sk: {
          field: "GSI1SK",
          composite: ["createdAt"],
        },
      },
    },
  },
  Dynamo.Service
);

// This is a compile time type check to make sure your schema definition and your database entity definition are equal
type _ = Expect<Equal<EmployeeSchema, EntityItem<typeof Entity>>>;

// This section defines the methods that we can use to interact with the User entity in our database

/**
 * @description
 * Find an employee by id
 */
export const findWithId = async (id: string) => {
  const res = await Entity.get({ id }).go();

  return res.data;
};

/**
 * @description
 * List all employees associated with a user account
 */
export const listForUser = async (
  userId: string,
  cursor?: string,
  limit?: number
) => {
  const res = await Entity.query.byUser({ userId }).go({
    cursor,
    limit,
    order: "desc",
  });

  return res;
};

/**
 * @description
 * Update fields on an employee
 */
export const update = async (request: UpdateEmployeeSchema) => {
  const { id, ...updates } = request;

  const res = await Entity.update({ id }).set(updates).go();

  return res.data;
};

/**
 * @description
 * This creates a employee object exactly how it will be stored in our database, before actually storing it.
 * This patterns of building before saving might come in handy for i.e. permission checks etc
 */
export const build = (
  employee: CreateEmployeeSchema,
  userId: string,
  id?: string,
  createdAt?: number
) => {
  // This will create a employee object exactly how it will be stored in our database
  const mock = Entity.create({ ...employee, id, createdAt, userId }).params()
    .Item;

  // This will parse and return the user object against our schema
  return EmployeeSchema.parse(mock);
};

/**
 * @description
 * This takes a previously built user object and actually stores it into the dynamodb
 */
export const create = async (employee: EmployeeSchema) => {
  return await Entity.create(employee).go();
};

/**
 * @description
 * Create many employees at once
 */
export const createMany = async (employees: EmployeeSchema[]) => {
  return await Entity.put(employees).go();
};

/**
 * @description
 * Delete employees by their ids
 */
export const remove = async (ids: string[]) => {
  const idsToDelete = ids.map((id) => ({ id }));

  return await Entity.delete(idsToDelete).go();
};

// Exports the entity along with its methods for easy use in the code
export * as EmployeeEntity from "./EmployeeEntity";
