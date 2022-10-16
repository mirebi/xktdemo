<script>
	import Banner from './banner.svelte';
	import Seperator from './seperator.svelte';
</script>

<div class="hero">
	<div class="background bg-xkt-red-600" />
	<div class="banner flex flex-col justify-center"><Banner /></div>
	<div class="seperator"><Seperator /></div>
</div>

<style>
	.hero {
		height: 50rem;
		display: grid;
		grid-template-columns: 1fr 5fr 1fr;
		grid-template-rows: 1fr 8fr 2fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
	}

	.background {
		z-index: -10;
		grid-area: 1/1/4/4;
	}

	.seperator {
		z-index: 20;
		grid-area: 3 / 1 / 4 / 4;
	}

	.banner {
		z-index: 0;
		grid-area: 2 / 2 / 3 / 3;
	}
</style>
