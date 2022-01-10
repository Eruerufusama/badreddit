<script>
    import Image from './_image.svelte';

    export let thumbnail;
    export let title;
    export let link;
</script>

<section>
    <Image thumbnail={thumbnail} />
    <h2>
        { title }
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