<script>
	import '@fontsource/material-icons-rounded';
	import { onMount } from 'svelte';

	let links = {
		Services: '/#services',
		Facility: '/facility',
		Projects: '/projects',
		Contact: '/contact'
	};
	let state = { visible: true, expanded: false };

	let toggleMenu = () => {
		state.expanded = !state.expanded;
	};

	let mediaChangeHandler = (x) => {
		if (x.matches) {
			state.visible = false;
		} else {
			state.visible = true;
		}
	};

	// above md breakpoint
	onMount(() => {
		window.matchMedia('(min-width: 767px)').addEventListener('change', mediaChangeHandler);
	});
</script>

<header class="flex flex-col w-full py-2 md:grid">
	<div class="spacing" />
	<div class="flex justify-between w-full px-12 shadow-md md:px-0 branding md:shadow-none">
		<a href="/">
			<img src="/logo.webp" alt="XKT Engineering Logo." class="object-contain h-10 md:h-22" />
		</a>
		{#if state.visible}
			<button on:click={toggleMenu} class="md:hidden">
				<span class="text-3xl material-icons-rounded">menu</span>
			</button>
		{/if}
	</div>
	<div class="spacing" />
	<nav
		class="shadow-md links md:flex md:items-center md:justify-center md:shadow-none"
		class:hidden={state.expanded}
	>
		<ul class="flex flex-col navlink md:flex-row md:items-end">
			{#each Object.entries(links) as [name, link]}
				<li class="px-3 text-lg text-center border border-b-black md:border-none">
					<a href={link}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="spacing" />
</header>

<style>
	li {
		font-family: Montserrat, sans-serif;
	}

	li:hover {
		border-bottom: 2px solid;
	}
	@media screen and (min-width: 768px) {
		header {
			display: grid;
			grid-template-columns: 2fr 3fr 2fr 4fr 2fr;
			grid-template-rows: 1fr;
			grid-auto-columns: 1fr;
			gap: 6px 0px;
			grid-auto-flow: row;
			grid-template-areas: '. branding . links .';
		}

		.branding {
			grid-area: branding;
		}

		.links {
			grid-area: links;
		}
	}
</style>
