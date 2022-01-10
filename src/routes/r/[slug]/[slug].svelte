<script context="module">

    export async function load({ url }) {
        const endpoint = `https://www.reddit.com${url.pathname}.json`;
        const response = await fetch(endpoint);

        if (response.ok) {
            const json_response = await response.json();
            const data = json_response.data.children.map((post) => post.data);

            return {
                props: {
                    posts: data,
                    subreddit: url.pathname.split('/')[2],
                }
            };
        }
        return {
            status: response.status,
            error: new Error(`Could not load ${endpoint}`),
        }
    };
</script>

<script>
//  imports
    import Post from '$lib/Post/Post.svelte';
    
//  props
    export let posts;
    export let subreddit;
</script>

<main>
    <nav>
        <h1>/r/{ subreddit }</h1>
        <ul>
            <li><a sveltekit:prefetch href={`/r/${subreddit}/hot`}>Hot</a></li>
            <li><a sveltekit:prefetch href={`/r/${subreddit}/new`}>New</a></li>
            <li><a sveltekit:prefetch href={`/r/${subreddit}/rising`}>Rising</a></li>
            <li><a sveltekit:prefetch href={`/r/${subreddit}/controversial`}>Controversial</a></li>
            <li><a sveltekit:prefetch href={`/r/${subreddit}/top`}>Top</a></li>
        </ul>
    </nav>

    {#each posts as post}            
        <Post {post} />
    {/each}
</main>

<style lang="sass">

    nav
        display: flex
        align-items: center
        justify-content: space-between
        padding: 0 1rem 0 5rem

        ul
            display: flex
            gap: 2em
        

    main
        display: grid
        width: min(90vw, 1080px)
        box-sizing: border-box
        padding: 1em
        row-gap: 1em
        margin: auto

</style>