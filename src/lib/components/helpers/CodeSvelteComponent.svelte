<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';

	export let name: string = 'CustomComponent';
	export let info: SvelteInformations;

	const brackesOpen: string = '<';
	const brackesClose: string = '>';

	const bracesOpen: string = '{';
	const bracesClose: string = '}';

	const hasProps: boolean = info?.props.length > 0;
	const hasActions: boolean = info?.actions.length > 0;
	const hasSlots: boolean = info?.slots.length > 0;
	const hasAdditionalInfo: boolean = hasProps || hasActions;
</script>

<div>
	{#if hasAdditionalInfo}
		<span class="tag">{brackesOpen}<span class="name">{name}</span></span>

		<ul data-testid="props-actions">
			{#each info.props as prop}
				<li>{bracesOpen} <span class="prop">{prop.name}</span> {bracesClose}</li>
			{/each}
			{#each info.actions as action}
				<li>on:<span class="action">{action.name}</span></li>
			{/each}
		</ul>

		{#if hasSlots}
			<span class="tag">{brackesClose}</span>
			<span data-testid="slots">
				{#each info.slots as slot}
					<p>
						{#if slot.anonymous}
							<span class="tag">{brackesOpen}div{brackesClose}</span> Slot anonymous
							<span class="tag">{brackesOpen}/div{brackesClose}</span>
						{:else}
							<span class="tag"
								>{brackesOpen}div <span class="slot">slot="{slot.name}"</span> {brackesClose}</span
							>
							Named slot
							<span class="tag">{brackesOpen}/div{brackesClose}</span>
						{/if}
					</p>
				{/each}
			</span>
			<span class="tag">{brackesOpen}/<span class="name">{name}</span>{brackesClose}</span>
		{:else}
			<span class="tag"> /{brackesClose}</span>
		{/if}
	{:else}
		<span class="tag" data-testid="only-name"
			>{brackesOpen}<span class="name">{name}</span> /{brackesClose}</span
		>
	{/if}
</div>

<style lang="postcss">
	div {
		color: var(--code-svelte-text-color, theme('colors.gray.800'));
		background-color: var(--code-svelte-background-color, theme('colors.gray.50'));
	}

	.tag,
	.name {
		color: var(--code-svelte-tag, theme('colors.green.600'));
	}

	.name {
		@apply font-extrabold;
	}

	.prop {
		@apply font-semibold;
		color: var(--code-svelte-prop, theme('colors.purple.600'));
	}

	.action {
		@apply font-semibold;
		color: var(--code-svelte-action, theme('colors.yellow.700'));
	}

	.slot {
		@apply font-semibold;
		color: var(--code-svelte-action, theme('colors.indigo.700'));
	}

	li,
	p {
		@apply pl-8;
	}
</style>
