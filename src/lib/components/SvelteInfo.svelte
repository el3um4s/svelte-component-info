<script lang="ts">
	import Section from './helpers/Section.svelte';
	import CodeBash from './helpers/CodeBash.svelte';
	import CodeSvelte from './helpers/CodeSvelte.svelte';
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let name: string;
	export let description: string = '-';
	export let info: SvelteInformations;
	export let urlPackage: string = '-';

	let className = '';
	export { className as class };
	$: className = className || '';

	$: name = name || undefined;
</script>

<section>
	{#if name}
		<h1>{name}</h1>
	{/if}
	{#if description !== '-'}
		<div data-testid="description">
			<i>{description}</i>
		</div>
	{/if}

	<Section title="How to use" open={true}>
		{#if urlPackage !== '-'}
			<div>To import the package in a project:</div>
			<CodeBash code="npm i -D {urlPackage}" />
		{/if}

		<div>To use in a file:</div>

		<CodeSvelte {urlPackage} {name} {info} />
	</Section>

	{#if info && info.props.length > 0}
		<Section title="Props" open={false}>
			<div class="table">
				<span class="table-header">Name</span>
				<span class="table-header">Type</span>
				<span class="table-header">Default</span>

				{#each info.props as prop}
					<span>{prop.name}</span>
					<span class={prop.type ? '' : 'undefined'}>{prop.type}</span>
					<span class={prop.defaultValue ? '' : 'undefined'}>{prop.defaultValue}</span>
				{/each}
			</div>
		</Section>
	{/if}

	{#if info && info.actions.length > 0}
		<Section title="Actions" open={false}>
			<div class="list-actions">
				<ul>
					{#each info.actions as action}
						<li class="list-of-actions-name">on:<span>{action.name}</span></li>
					{/each}
				</ul>
			</div>
		</Section>
	{/if}
</section>

<style lang="postcss">
	* {
		color: var(--text-color, theme('colors.gray.800'));
		background-color: var(--background-color, theme('colors.gray.50'));

		/* other colors:
			--code-bash-background-color
			--code-bash-text-color

			--code-svelte-background-color
			--code-svelte-text-color
			--code-svelte-import
			--code-svelte-tag
			--code-svelte-prop
		 */
	}

	section {
		@apply w-full;
	}
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

	.list-of-actions-name span {
		@apply font-bold;
	}
</style>
