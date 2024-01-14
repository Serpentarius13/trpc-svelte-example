import { HelloEntity } from "../entities";
import { router } from "./trpc.init";

export const trpcRouter = router({
  Hello: HelloEntity,
});

export type TrpcServer = typeof trpcRouter;
