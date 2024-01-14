import { trpcServer } from "$lib/server/trpc/trpc.server";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  event.locals.trpc = trpcServer;

  return {
    trpc: await trpcServer.hydrateToClient(event),
  };
};
