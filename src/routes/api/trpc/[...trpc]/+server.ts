import { trpcServer } from "$lib/server/trpc/trpc.server";

export const GET = trpcServer.handler;
export const POST = trpcServer.handler;
