import {
  CreateEmployeeSchema,
  DeleteEmployeeSchema,
  GetEmployeeByIdSchema,
  UpdateEmployeeSchema,
} from "@nextsystems/schemas/EmployeeSchema";
import { procedure, router } from "..";
import { EmployeeQueries } from "../../queries/EmployeeQueries";
import { EmployeeMutations } from "../../mutations/EmployeeMutations";
import { ListSchema } from "@nextsystems/schemas/ListSchema";

/**
 * @description
 * This is our trpc router. It is the entry point for all trpc requests related to employees.
 * These are also the methods that we can import in our frontend to interact with employees on our backend in a type-safe way.
 */
export const employeesRouter = router({
  getById: procedure
    .input(GetEmployeeByIdSchema)
    .query(async ({ ctx, input }) => {
      const employee = await EmployeeQueries.getById(input);

      return employee;
    }),

  list: procedure.input(ListSchema.optional()).query(async ({ ctx, input }) => {
    const employees = await EmployeeQueries.list({
      cursor: input?.cursor,
      limit: input?.limit,
      userId: ctx.user.id,
    });

    return employees;
  }),

  create: procedure
    .input(CreateEmployeeSchema)
    .mutation(async ({ ctx, input }) => {
      const employee = await EmployeeMutations.create(input, ctx.user.id);

      return employee;
    }),

  createMocks: procedure.mutation(async ({ ctx }) => {
    const employees = await EmployeeMutations.createMocks(ctx.user.id);

    return employees;
  }),

  update: procedure
    .input(UpdateEmployeeSchema)
    .mutation(async ({ ctx, input }) => {
      const employee = await EmployeeMutations.update(input);

      return employee;
    }),

  delete: procedure
    .input(DeleteEmployeeSchema)
    .mutation(async ({ ctx, input }) => {
      const employee = await EmployeeMutations.delete(input);

      return employee;
    }),
});
