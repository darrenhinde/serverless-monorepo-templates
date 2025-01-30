import {
  GetUserByEmailSchema,
  GetUserByIdSchema,
  UpdateUserSchema,
} from "@nextsystems/schemas/UserSchema";
import { procedure, router } from "..";
import { UserQueries } from "../../queries/UserQueries";
import { UserMutations } from "../../mutations/UserMutations";

export const usersRouter = router({
  getCurrentUser: procedure.query(async ({ ctx }) => {
    return ctx.user;
  }),

  getById: procedure.input(GetUserByIdSchema).query(async ({ ctx, input }) => {
    const user = await UserQueries.getById(input);

    return user;
  }),

  getByEmail: procedure.input(GetUserByEmailSchema).query(async ({ input }) => {
    const user = await UserQueries.getByEmail(input);

    return user;
  }),

  update: procedure.input(UpdateUserSchema).mutation(async ({ input }) => {
    const user = await UserMutations.update(input);

    return user;
  }),
});
