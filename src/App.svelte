<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  export let name;
</script>

<style>

</style>

<Tailwindcss />

<main>
  <h1 class="bg-black text-white">Hello {name}! It's me</h1>
</main>
