import type { TrpcRouter } from "$lib/server/trpc/trpc.router";
import { createTRPCSvelte, httpBatchLink } from "trpc-svelte-query";

export const trpc = createTRPCSvelte<TrpcRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
