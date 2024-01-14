<script>
    import {trpc} from "$lib/api/trpc/trpc.client";
    import {QueryClientProvider} from "@tanstack/svelte-query";

    export let data;

    $:queryClient = trpc.hydrateFromServer(data.trpc)
</script>

<QueryClientProvider client={queryClient}>
    <div class="app">
        <slot/>
    </div>
</QueryClientProvider>
