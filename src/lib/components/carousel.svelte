<script>
	export let images = [];
	export let width = 'auto';
	export let height = '600px';

	let index = 0;
	let next = () => {
		index = (index + 1) % images.length;
	};
	let prev = () => {
		index = (index + 1) % images.length;
	};
</script>

<div class="slideshow">
	<div class="image flex justify-center items-center">
		<img
			class="object-contain"
			src={images[index]}
			alt="placeholder"
			style="--width:{width};--height:{height}"
		/>
	</div>
	<button on:click={prev} class="prevbutton"
		><span class="material-icons-rounded text-4xl"> chevron_left</span>
	</button>
	<button on:click={next} class="nextbutton"
		><span class="material-icons-rounded text-4xl"> chevron_right</span>
	</button>
</div>

<style>
	img {
		width: var(--width);
		height: var(--height);
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
