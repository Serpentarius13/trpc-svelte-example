import type { TrpcServer } from "$lib/server/trpc/trpc.router";
import { createTRPCSvelte, httpBatchLink } from "trpc-svelte-query";

export const trpc = createTRPCSvelte<TrpcServer>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
