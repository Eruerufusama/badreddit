<script>
    export let thumbnail;
</script>

<img
    src={thumbnail === 'self' ? '/reddit-icon.png' : thumbnail}
    alt="thumbnail"
    width={64}
    height={64}
>

<style lang="sass">
    img
        box-sizing: border-box
        border-radius: 2em
</style>