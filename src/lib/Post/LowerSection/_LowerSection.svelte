<script>
    // export let timestamp;
    export let author;
    export let num_comments;
</script>

<section>
    <p>Posted <span>5 hours ago</span> by <span>{author}</span></p>
    <p><span>{num_comments}</span> comments</p>
</section>

<style lang="sass">

    section
        display: flex
        background-color: var(--color-background-2)
        color: var(--color-foreground-3)
        justify-content: space-between
        padding: 0.5rem 1rem

</style>