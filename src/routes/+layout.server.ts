import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  return {
    trpc: await event.locals.trpc.hydrateToClient(event),
  };
};
