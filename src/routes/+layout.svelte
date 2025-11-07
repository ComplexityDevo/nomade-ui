<script lang="ts">
import Footer from "$lib/components/Footer.svelte";
import Navbar from "$lib/components/Navbar.svelte";
import "../app.css";

let { children } = $props();

</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="use-credentials">
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />

{@render children()}

<Footer />
