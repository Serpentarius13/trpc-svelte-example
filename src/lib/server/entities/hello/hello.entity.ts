import { helloSchema } from "$lib/api/schemas";
import { publicProcedure, router } from "$lib/server/trpc/trpc.init";

const getHello = publicProcedure.input(helloSchema).query(({ ctx, input }) => {
  return `hello world from ${ctx.event.url.origin}, ${input.name}`;
});

export const HelloEntity = router({
  getHello,
});
