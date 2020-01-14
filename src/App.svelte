<script>
	import Tailwindcss from './Tailwindcss.svelte';
	export let name;
</script>
<Tailwindcss />

<main>
	<h1 class="bg-black text-white">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>

</style>