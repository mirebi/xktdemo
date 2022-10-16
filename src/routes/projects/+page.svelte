<script>
	import Projectinfo from '$lib/components/projectinfo.svelte';
	import { projects } from '$lib/sources';
</script>

<div class="py-4">
	{#each projects as source}
		<div class="flex justify-center items-center py-10">
			<Projectinfo about={source} />
		</div>
	{/each}
</div>
