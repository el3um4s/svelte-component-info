<script lang="ts">
	export let name: string = 'CustomComponent';
	export let urlPackage: string = '-';

	const openScript: string = '<' + 'script' + '>';
	const closeScript: string = '<' + '/script' + '>';

	const bracesOpen: string = '{';
	const bracesClose: string = '}';
</script>

<div>
	<span class="tag">{openScript}</span>
	<p>
		import {bracesOpen} <span class="import">{name}</span>
		{bracesClose} from
		<span class="import">"{urlPackage}"</span>;
	</p>
	<span class="tag">{closeScript}</span>
</div>

<style lang="postcss">
	div {
		color: var(--code-svelte-text-color, theme('colors.gray.800'));
		background-color: var(--code-svelte-background-color, theme('colors.gray.50'));
	}

	.import {
		@apply font-semibold;
		color: var(--code-svelte-import, theme('colors.red.600'));
	}

	.tag {
		color: var(--code-svelte-tag, theme('colors.green.600'));
	}

	p {
		@apply pl-8;
	}
</style>
