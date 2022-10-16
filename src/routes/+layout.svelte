<script>
	import Hero from '$lib/components/hero.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '$lib/app.css';
</script>

<Navbar />
<slot />
<footer class="border border-t-black flex flex-col items-center h-8 text-xs">
	<p>Copyright © 2022 :: XKT Engineering Inc. :: All Rights Reserved</p>
	<p>Site create by VZ Group.</p>
</footer>
