<script lang="ts">
    import { replaceAngleBrackets } from '$lib/functions/filterText';

    export let title: string;
    export let url: string;

</script>

<h2>
    <a href={url} target="_blank" rel="noopener noreferrer">
        { replaceAngleBrackets(title) }
    </a>
</h2>