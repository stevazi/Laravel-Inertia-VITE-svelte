<script>
    import { inertia, Link } from "@inertiajs/inertia-svelte";
    import Layout from "./Layout.svelte";

    export let user;
</script>

<Layout>
<h1 class="text-3xl font-bold underline">
    hello {user}, from svelte home
</h1>
</Layout>
