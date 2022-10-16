<script>
	import '@fontsource/catamaran';
	import '@fontsource/montserrat';
	import '@fontsource/material-icons-rounded';
	import { fade } from 'svelte/transition';

	export let about = {};

	let index = 0;
	let next = () => {
		index = (index + 1) % about.images.length;
	};
	let prev = () => {
		index = (index + 1) % about.images.length;
	};
</script>

<div class=" border-4 border-black p-3">
	<div class="slideshow">
		<div class="image flex justify-center items-center">
			<img class="h-[600px] object-contain" src={about.images[index]} alt="placeholder" />
		</div>
		<button on:click={prev} class="prevbutton"
			><span class="material-icons-rounded text-4xl"> chevron_left</span>
		</button>
		<button on:click={next} class="nextbutton"
			><span class="material-icons-rounded text-4xl"> chevron_right</span>
		</button>
	</div>

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

	.slideshow {
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
	}

	.image {
		grid-area: 1 / 1 / 2 / 4;
		z-index: -10;
	}
	.prevbutton {
		grid-area: 1 / 1 / 2 / 2;
		z-index: 10;
	}
	.nextbutton {
		grid-area: 1 / 3 / 2 / 4;
		z-index: 10;
	}
</style>
