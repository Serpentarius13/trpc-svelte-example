import { publicProcedure, router } from "$lib/server/trpc/trpc.init";
import { z } from "zod";

const helloSchema = z.object({
  name: z.string(),
});

const getHello = publicProcedure.input(helloSchema).query(({ ctx, input }) => {
  return `hello world from ${ctx.event.url.origin}, ${input.name}`;
});

export const HelloEntity = router({
  getHello,
});
