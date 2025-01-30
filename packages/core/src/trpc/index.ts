import { UserSchema } from "@nextsystems/schemas/UserSchema";
import { initTRPC } from "@trpc/server";

/**
 * @description
 * This file sets up the core configuration for tRPC, a TypeScript-first framework for building type-safe APIs. It does a few key things:
 *
 * 1. Imports the user schema and tRPC initialization function.
 * 2. Defines a context that includes user information.
 * 3. Creates a tRPC instance with this context.
 * 4. Exports router and procedure creators.
 *
 * These exports allow other parts of the app to define type-safe API endpoints.
 * The context ensures that user data is available in all trpc procedures (endpoints), enabling easy access to user information when handling requests.
 */
export type TRPCContext = { user: UserSchema };

const t = initTRPC.context<TRPCContext>().create();

export const router = t.router;
export const procedure = t.procedure;
