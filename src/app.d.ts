// See https://kit.svelte.dev/docs/types#app
import type { TrpcServer } from "$lib/server/trpc/trpc.server";
// for information about these interfaces

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      trpc: TrpcServer;
    }

    //ReturnType<typeof createTRPCSvelteServer<TrpcServer, any>>

    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
