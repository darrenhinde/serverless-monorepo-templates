import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { auth } from "@/auth/auth";
import { TRPCError } from "@trpc/server";
import { appRouter } from "@nextsystems/core/trpc/router";
import { UserQueries } from "@nextsystems/core/queries/UserQueries";

const handler = auth((req) =>
  fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext: async () => {
      if (!req.auth?.user?.id) throw new TRPCError({ code: "UNAUTHORIZED" });

      const user = await UserQueries.getById({ id: req.auth.user.id });

      if (!user) throw new TRPCError({ code: "UNAUTHORIZED" });

      return { user };
    },
  })
);

export { handler as GET, handler as POST };
