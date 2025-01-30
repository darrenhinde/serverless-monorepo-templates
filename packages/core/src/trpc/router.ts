import { router } from ".";
import { employeesRouter } from "./routers/employees";
import { storageRouter } from "./routers/storage";
import { usersRouter } from "./routers/users";

/**
 * @description
 * This is the main router for our tRPC API.
 * It includes all the routers for our API.
 *
 * The endpoints will turn out like `/users/getById` or `/employees/update` etc.
 */
export const appRouter = router({
  user: usersRouter,
  employees: employeesRouter,
  storage: storageRouter,
});

/**
 * @description
 * This is the type that our frontend tRPC client will consume to make type-safe requests to our API.
 */
export type AppRouter = typeof appRouter;
