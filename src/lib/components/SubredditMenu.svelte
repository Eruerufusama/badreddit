<script lang="ts">
    export let subreddit;
</script>

<ul>
    <li><a sveltekit:prefetch href={`/r/${subreddit}/hot`}>Hot</a></li>
    <li><a sveltekit:prefetch href={`/r/${subreddit}/new`}>New</a></li>
    <li><a sveltekit:prefetch href={`/r/${subreddit}/rising`}>Rising</a></li>
    <li><a sveltekit:prefetch href={`/r/${subreddit}/controversial`}>Controversial</a></li>
    <li><a sveltekit:prefetch href={`/r/${subreddit}/top`}>Top</a></li>
</ul>

<style lang="sass">
    ul
        display: flex
        gap: 2em
</style>