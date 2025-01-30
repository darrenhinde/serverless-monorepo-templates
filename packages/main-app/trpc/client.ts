import { AppRouter } from "@nextsystems/core/trpc/router";
import { createTRPCProxyClient, createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";

export const trpc = createTRPCReact<AppRouter>();
export const trpcAsync = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_APP_DOMAIN?.includes("localhost")
        ? "/api/trpc"
        : `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/trpc`,
    }),
  ],
});
