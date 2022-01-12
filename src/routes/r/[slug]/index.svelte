<script context="module">

    export async function load({ url }) {
        return {
            status: 300,
            redirect: url.pathname + '/hot',
        };
    };

</script>