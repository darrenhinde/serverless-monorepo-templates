import { GetEmployeeByIdSchema } from "@nextsystems/schemas/EmployeeSchema";
import { EmployeeEntity } from "../database/entities/EmployeeEntity";
import { ListSchema } from "@nextsystems/schemas/ListSchema";

/**
 * @description
 * Queries are read-only operations that fetch data without modifying the database state.
 * This module centralizes all read operations related to employees, ensuring consistent data retrieval.
 *
 * Key aspects:
 * - Data Retrieval: Implement complex data fetching, filtering, and transformations here
 * - Business Logic: Enhance retrieved data with additional information or calculations here
 * - No side Effects: Do not modify the database or application state
 *
 */
export const EmployeeQueries = {
  getById: async ({ id }: GetEmployeeByIdSchema) => {
    const employee = await EmployeeEntity.findWithId(id);

    return employee;
  },

  list: async ({ userId, cursor, limit }: ListSchema & { userId: string }) => {
    const employees = await EmployeeEntity.listForUser(userId, cursor, limit);

    return employees;
  },
};
