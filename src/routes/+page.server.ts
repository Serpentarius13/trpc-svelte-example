import { trpcServer } from "$lib/server/trpc/trpc.server";

export const load = async (event) => {
  return {
    hello: await trpcServer.Hello.getHello.ssr({ name: "Rich" }, event),
  };
};
