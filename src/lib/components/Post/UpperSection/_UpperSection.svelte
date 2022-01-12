<script>
    import Image from './_image.svelte';

    export let thumbnail;
    export let title;
    export let url;
</script>

<section>
    <Image thumbnail={thumbnail} />
    <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
            { title }
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

        span
            color: var(--color-foreground-2)

</style>