<script>
    import { fly } from 'svelte/transition';
    import LowerSection from './LowerSection/_LowerSection.svelte';
    import Selftext from './MiddleSection/_Selftext.svelte';
    import UpperSection from './UpperSection/_UpperSection.svelte';

//  props
    export let post;

//  states
    let isOpen = false;
    let symbol = '+';

//  logic
    function toggleOpen() {
        isOpen ? symbol = '+' : symbol = '-';
        isOpen = !isOpen;
    }

    console.log(post);

</script>
<article>
    <aside>
        {post.score}
    </aside>
    <main>
        <UpperSection
            title={post.title}
            link={post.link}
            thumbnail={post.thumbnail}
        />

        {#if isOpen}
            <Selftext selftext={post.selftext} />
        {/if}

        <LowerSection
            author={post.author}
            num_comments={post.num_comments}
        />

    </main>

    {#if post.is_self}
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


                &:hover
                    background-color: var(--color-foreground-3)

                span
                    grid-column: 1
                    grid-row: 1
</style>