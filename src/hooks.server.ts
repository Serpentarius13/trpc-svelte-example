import { trpcServer } from "$lib/server/trpc/trpc.server";

export async function handle({ event, resolve }) {
  event.locals.trpc = trpcServer;

  const response = await resolve(event);

  return response;
}
