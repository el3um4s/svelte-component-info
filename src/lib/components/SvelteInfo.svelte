<script lang="ts">
	import Section from './Section.svelte';
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let name: string;
	export let description: string = '-';
	export let info: SvelteInformations;
	export let urlPackage: string = '-';

	let className = '';
	export { className as class };
	$: className = className || '';

	$: name = name || undefined;

	const brackesOpen: string = '<';
	const brackesClose: string = '>';

	const bracesOpen: string = '{';
	const bracesClose: string = '}';
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

	<Section title="How to use" visible={true}>
		{#if urlPackage !== '-'}
			<div>To import the package in a project:</div>

			<div class="code details" data-testid="urlPackage">npm i -D {urlPackage}</div>
		{/if}

		<div>To use in a file:</div>
		<div class="code details">
			{#if urlPackage !== '-'}
				<div data-testid="import-code">
					{brackesOpen}script{brackesClose}
					<p>
						import {bracesOpen}
						{name ? name : 'CustomComponent'}
						{bracesClose} from "{urlPackage}"
					</p>
					{brackesOpen}/script{brackesClose}
				</div>
			{/if}
			<div>
				{brackesOpen}{name}
				{#if info && info.props.length > 0}
					<ul data-testid="list-of-props">
						{#each info.props as prop}
							<li class="list-of-props-name">{prop.name}</li>
						{/each}
					</ul>
				{/if}{brackesClose}
				{brackesOpen}/{name}{brackesClose}
			</div>
		</div>
	</Section>

	{#if info && info.props.length > 0}
		<Section title="Props" visible={false}>
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
		<Section title="Actions" visible={false}>
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

	.code {
		@apply font-mono pl-2;
	}

	.code li,
	.code p {
		@apply pl-8;
	}
	.code div {
		@apply mb-2 mt-2;
	}

	.details {
		@apply flex flex-col border border-gray-300 p-2 m-2;
	}

	.details .title {
		@apply bg-gray-200 text-gray-800 font-bold;
		margin-top: -8px;
		margin-left: -8px;
		margin-right: -8px;
	}

	.list-of-actions-name span {
		@apply font-bold;
	}
</style>
