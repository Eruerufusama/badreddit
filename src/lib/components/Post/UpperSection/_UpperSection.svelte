<script lang="ts">
    // imports
    import Image from './_image.svelte';
    import Title from './_Title.svelte';
    
    // props
    export let thumbnail: string;
    export let title: string;
    export let url: string;
</script>

<section>
    <Image {thumbnail} />
    <Title {url} {title} />
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