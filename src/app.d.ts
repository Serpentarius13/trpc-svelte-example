// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { createTRPCSvelteServer } from "trpc-svelte-query/server";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      trpc: ReturnType<typeof createTRPCSvelteServer<TrpcServer>>;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
