<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let info: SvelteInformations;
</script>

<div class="table" data-testid="props">
	<span class="table-header">Name</span>
	<span class="table-header">Type</span>
	<span class="table-header">Default</span>

	{#each info.props as prop}
		<span>{prop.name}</span>
		<span class={prop.type ? '' : 'undefined'}>{prop.type}</span>
		<span class={prop.defaultValue ? '' : 'undefined'}>{prop.defaultValue}</span>
	{/each}
</div>

<style lang="postcss">
	.table {
		@apply grid grid-cols-3;
	}

	.table > span {
		@apply pt-2 pb-2 pr-1 pl-1;
		border-bottom: 1px solid var(--text-color, theme('colors.gray.800'));
	}

	.table > span.table-header {
		@apply font-bold;
	}

	.table > span.undefined {
		background-color: var(--text-color, theme('colors.gray.800'));
		color: var(--background-color, theme('colors.gray.50'));
	}
</style>
