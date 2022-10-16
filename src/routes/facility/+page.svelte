<script>
	import Carousel from '$lib/components/carousel.svelte';
	import '@fontsource/catamaran';
	import '@fontsource/montserrat';
	import { facility } from '$lib/sources';
</script>

<div class="gallery h-[40rem] md:h-[94vh]">
	<div class="carousel">
		<Carousel images={facility} height="900px" />
	</div>
	<div class="about  bg-xkt-red-600 flex flex-col gap-4 md:gap-8 p-1 md:p-10 mt-2">
		<p class="text-2xl head">Facility</p>
		<p>
			XKT Engineering's plant consists of fabrication and assembly bays with 200,000 square feet
			under roof situated on approximately 19 acres. Included in this space is a 35,000 square foot,
			full service machine shop. Overhead cranes and mobile equipment provide for ease of lifting
			raw materials, component parts and completed fabrication.
		</p>

		<p>
			We are serviced by all major trucking companies, rail service into the facility and direct
			access to the Mare Island Straits and San Francisco Bay for barge movements.
		</p>
		<p>
			XKT's dock area consist of a 546'-0" long reinforced pier serviced by a 100 ton derrick barge
			and a 100 ton portal crane. Laydown and assembly areas approximately 4.5 acres.
		</p>

		<p>
			Our marine division has 5 barges, each approximately 33'-0" x 110'-0", available for delivery
			of marine based projects. These barges are also available for charter.
		</p>
	</div>
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: 2fr 4fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'about carousel';
	}

	.about {
		grid-area: about;
	}

	.carousel {
		grid-area: carousel;
	}
	p {
		font-family: Montserrat, sans-serif;
	}

	.head {
		font-family: Catamaran, sans-serif;
		border-bottom: 2px solid black;
	}

	@media screen and (max-width: 1024px) {
		.gallery {
			display: flex;
			flex-direction: column;
		}
	}
</style>
