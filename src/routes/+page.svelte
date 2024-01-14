<script>

    import {trpc} from "$lib/api/trpc/trpc.client";


    export let data;

    const query = trpc.Hello.getHello.query({name: 'Rich'})
</script>

<svelte:head>
    <title>Trpc svelte example</title>

</svelte:head>

{data.hello}

{#if $query.isLoading}
    <p>Loading...</p>
{:else if $query.error}
    <p>Error: {$query.error.message}</p>
{:else if $query.data}
    <p>{$query.data}</p>
{/if}


<style>

</style>
