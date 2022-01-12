<script>
    import { getTimeSincePosted } from '$lib/functions/time';

    export let created_utc;
    export let author;
    export let num_comments;

    let { time, format } = getTimeSincePosted(created_utc);

    if (time !== 1) {
        format += 's';
    }
</script>

<section>
    <p>
        Posted <span>{time} {format} ago</span> by <span class="author">{author}</span>
    </p>
    <p><span>{num_comments}</span> comments</p>
</section>

<style lang="sass">

    section
        display: flex
        background-color: var(--color-background-2)
        color: var(--color-foreground-3)
        justify-content: space-between
        padding: 0.5rem 1rem
        border-bottom-left-radius: 0.5rem

        span
            color: var(--color-foreground-2)
            font-weight: 500
        .author
            color: var(--color-user)
            font-weight: 500

</style>