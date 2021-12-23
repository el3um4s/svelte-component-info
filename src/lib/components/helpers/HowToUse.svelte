<script lang="ts">
	import CodeBash from './CodeBash.svelte';
	import CodeSvelte from './CodeSvelte.svelte';
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';

	export let urlPackage: string = '-';
	export let name: string;
	export let info: SvelteInformations;
</script>

<div data-testid="how-to-use">
	{#if urlPackage !== '-'}
		<div>To import the package in a project:</div>
		<CodeBash code="npm i -D {urlPackage}" />
	{/if}

	<div>To use in a file:</div>

	<CodeSvelte {urlPackage} {name} {info} />
</div>
