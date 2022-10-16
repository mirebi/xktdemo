<script>
	import '@fontsource/catamaran';
	import '@fontsource/montserrat';
	import '@fontsource/material-icons-rounded';
	import Carousel from './carousel.svelte';

	export let about = {};
</script>

<div class=" border-4 border-black p-3 w-[900px]">
	<Carousel images={about.images} />
	<div class="about py-2">
		<div class="title text-xl">{about.title}</div>
		<div class="subtitle text-md mt-1 underline underline-dark-800">{about.subtitle}</div>
		<div class="info text-sm pt-3">{about.info}</div>
	</div>
</div>

<style>
	.title {
		font-family: Catamaran, sans-serif;
		font-weight: 700;
	}
	.subtitle {
		font-family: Montserrat, sans-serif;
		font-weight: 700;
	}
	.info {
		font-family: Montserrat, sans-serif;
	}
</style>
