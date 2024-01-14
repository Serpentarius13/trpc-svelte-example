import { createTRPCSvelteServer } from "trpc-svelte-query/server";
import { createContext } from "./trpc.init";
import { trpcRouter } from "./trpc.router";

export const trpcServer = createTRPCSvelteServer({
  endpoint: "/api/trpc",
  router: trpcRouter,
  createContext,
});

export type TrpcServer = typeof trpcServer;
