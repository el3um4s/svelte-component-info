<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';

	import CodeSvelteImport from './CodeSvelteImport.svelte';
	import CodeSvelteComponent from './CodeSvelteComponent.svelte';
	export let name: string = 'CustomComponent';
	export let urlPackage: string = '-';
	export let info: SvelteInformations;
</script>

<div>
	{#if urlPackage !== '-'}
		<CodeSvelteImport {name} {urlPackage} />
		<br />
	{/if}
	<CodeSvelteComponent {name} {info} />
</div>

<style lang="postcss">
	div {
		@apply font-mono pl-2  mb-2 mt-2 flex flex-col border p-2 m-2;
		border-radius: 0 0.75rem 0 0.75rem;
		border-color: var(--code-svelte-background-color, var(--text-color, theme('colors.gray.800')));
		color: var(--code-svelte-text-color, var(--text-color, theme('colors.gray.800')));
		background-color: var(
			--code-svelte-background-color,
			var(--background-color, theme('colors.gray.50'))
		);
	}
</style>
