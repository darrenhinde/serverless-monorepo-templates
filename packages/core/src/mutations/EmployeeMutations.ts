import {
  CreateEmployeeSchema,
  DeleteEmployeeSchema,
  UpdateEmployeeSchema,
} from "@nextsystems/schemas/EmployeeSchema";
import { EmployeeEntity } from "../database/entities/EmployeeEntity";
import { mockEmployees } from "../utils/mockEmployees";

/**
 * @description
 * Mutations are operations that change the state of the database, as opposed to queries which only retrieve data.
 * This module centralizes all write operations related to employees, ensuring consistent data manipulation.
 *
 * Key aspects:
 * - Data Modification: This is the place to implement logic that modifies the database state
 * - Business Logic: This is the place to implement complex operations, data transformations, and validations
 * - Side Effects: This is the place to handle additional tasks like permission checks, external API calls, or event triggers
 */
export const EmployeeMutations = {
  create: async (request: CreateEmployeeSchema, userId: string) => {
    const employeeToCreate = EmployeeEntity.build(request, userId);

    const employee = await EmployeeEntity.create(employeeToCreate);

    return employee;
  },

  createMocks: async (userId: string) => {
    const employeesToCreate = mockEmployees(50).map((req) =>
      EmployeeEntity.build(req, userId)
    );

    const employees = await EmployeeEntity.createMany(employeesToCreate);

    return employees;
  },

  update: async (request: UpdateEmployeeSchema) => {
    const employee = await EmployeeEntity.update(request);

    return employee;
  },

  delete: async ({ ids }: DeleteEmployeeSchema) => {
    const employee = await EmployeeEntity.remove(ids);

    return employee;
  },
};
