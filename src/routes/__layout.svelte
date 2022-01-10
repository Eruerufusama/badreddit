<script>
    import '../default.sass';
    import subreddits from '$lib/data/navbar.json';

    export let key;
</script>

<svelte:head>
    <!-- Preconnect to google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Import Roboto typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <!-- Import Roboto Condensed typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <!-- Import Roboto Mono typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> 
</svelte:head>

<header>
    <ul>
        {#each subreddits as subreddit}
            <li><a href={`/r/${subreddit}`}>{ subreddit }</a></li>
        {/each}
    </ul>
</header>
<slot />

<style lang="sass">
    header
        widht: 100%
        display: grid
        place-items: center
        background-color: var(--color-background-3)

        ul
            display: flex
            gap: 1em
</style>
