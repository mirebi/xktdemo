<script>
	import Projectinfo from '$lib/components/projectinfo.svelte';
	import sources from '$lib/sources';
</script>

<div class="grid grid-cols-[1fr,2fr,1fr] py-4">
	<div class="col-start-2 col-span-1">
		{#each sources as source}
			<div class="py-4">
				<Projectinfo about={source} />
			</div>
		{/each}
	</div>
</div>
