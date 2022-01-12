<script context="module" lang="ts">

    // Imports
    import sanitizeData from '$lib/functions/sanitizeData';

    // Logic
    export async function load({ url }) {
        const endpoint = `https://www.reddit.com${url.pathname}.json`;
        const response = await fetch(endpoint);

        if (response.ok) {
            const json_response = await response.json();

            const posts = sanitizeData(json_response);
            const subreddit = url.pathname.split('/')[2];

            return {
                props: {
                    posts,
                    subreddit,
                },
            };
        }
        return {
            status: response.status,
            error: new Error(`Could not load ${endpoint}`),
        };
    };

</script>

<script>

    // imports
    import Post from '$lib/components/Post/Post.svelte';
    import SubredditMenu from '$lib/components/SubredditMenu.svelte';
    
    // props
    export let posts;
    export let subreddit;

</script>

<template>
    
    <main>
        <nav>
            <h1>/r/{ subreddit }</h1>
            <SubredditMenu {subreddit} />
        </nav>
    
        {#each posts as post}
            <Post {post} />
        {/each}
    </main>

</template>

<style lang="sass">

    nav
        display: flex
        align-items: center
        justify-content: space-between
        padding: 0 1rem 0 5rem

    main
        display: grid
        width: min(95vw, 1080px)
        row-gap: 1em
        box-sizing: border-box
        padding: 1em
        margin: auto

</style>