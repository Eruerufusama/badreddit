<script>
    // imports
    import Image from './_image.svelte';
    import { replaceAngleBrackets } from '$lib/functions/filterText';
    
    // props
    export let thumbnail;
    export let title;
    export let url;
</script>

<section>
    <Image thumbnail={thumbnail} />
    <h2>
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            { replaceAngleBrackets(title) }
        </a>
    </h2>
</section>

<style lang="sass">

    section
        display: flex
        background-color: var(--color-background-3)
        padding: 1rem
        column-gap: 1rem
        align-items: center
        border-top-left-radius: 0.5rem

</style>