<script lang="ts">
    export let selftext: string;
</script>

<section>
    <p>{selftext}</p>
</section>

<style lang="sass">

    section
        p
            padding: 1rem
            font-size: 1.2rem
            line-height: 1.3
            border-left: 4px solid var(--color-background-4)

</style>