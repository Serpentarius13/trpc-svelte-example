import type { RequestEvent } from "@sveltejs/kit";
import { type inferAsyncReturnType, initTRPC } from "@trpc/server";

export async function createContext(event: RequestEvent) {
  return {
    event,
  };
}

type TrpcContext = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<TrpcContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(async ({ next }) => {
  return next();
});
