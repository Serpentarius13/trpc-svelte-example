import { HelloEntity } from "../entities";
import { router } from "./trpc.init";

export const trpcRouter = router({
  Hello: HelloEntity,
});

export type TrpcRouter = typeof trpcRouter;
