<script lang="ts">
    import { fly } from 'svelte/transition';
    import LowerSection from './LowerSection/_LowerSection.svelte';
    import Selftext from './MiddleSection/_Selftext.svelte';
    import UpperSection from './UpperSection/_UpperSection.svelte';
    import { formatVotes } from '$lib/functions/formatVotes';
    import type { RedditPost } from '$lib/types/subredditPosts';

//  props
    export let post: RedditPost;

//  states
    let isOpen = false;
    let symbol = '+';

//  logic
    function toggleOpen() {
        isOpen ? symbol = '+' : symbol = '-';
        isOpen = !isOpen;
        console.log(post);
    }

    const { score, title, thumbnail, url, selftext, author, created_utc, num_comments, is_self } = post;
</script>
<article>
    <aside>
        { formatVotes(score) }
    </aside>
    <main>
        <UpperSection {title} {thumbnail} {url} />
        {#if isOpen}
            <Selftext {selftext} />
        {/if}
        <LowerSection {author} {created_utc} {num_comments} />
    </main>

    {#if is_self}
    <div>
        <button on:click={toggleOpen}>
            {#if isOpen}
            <span class="minus" transition:fly={{ y: -50, duration: 200 }}>{ symbol }</span>
            {:else}
            <span class="plus" transition:fly={{ y: 50, duration: 200 }}>{ symbol }</span>
            {/if}
        </button>
    </div>
    {/if}

</article>

<style lang="sass">
    article
        display: flex

        aside
            display: grid
            place-items: center
            min-width: 5rem
            font-size: 1.5rem
            font-weight: 800

        main
            flex-grow: 1

        div
            display: flex
            background-color: inherit

            button
                font-family: consolas
                background-color: inherit
                border: none
                color: inherit
                padding: 1rem
                font-size: 3rem
                width: 4rem
                display: grid
                place-items: center
                background-color: var(--color-background-4)
                border-radius: 0 0.5rem 0.5rem 0


                &:hover
                    background-color: var(--color-foreground-3)

                span
                    grid-column: 1
                    grid-row: 1
</style>