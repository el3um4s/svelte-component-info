<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';

	import Accordion from './helpers/Accordion.svelte';
	import Name from './helpers/Name.svelte';
	import Description from './helpers/Description.svelte';
	import HowToUse from './helpers/HowToUse.svelte';
	import Props from './helpers/Props.svelte';
	import Actions from './helpers/Actions.svelte';
	import CSSVariables from './helpers/CSSVariables.svelte';

	export let name: string;
	export let description: string = '-';
	export let info: SvelteInformations;
	export let urlPackage: string = '-';

	let className = '';
	export { className as class };
	$: className = className || '';

	$: name = name || undefined;

	const hasActions = info?.actions.length > 0;
	const hasProps = info?.props.length > 0;
	const hasCSSVariables = info?.css.length > 0;
</script>

<section class={className}>
	<Name {name} />
	<Description {description} />

	{#if $$slots.about}
		<Accordion title="About">
			<slot name="about" />
		</Accordion>
	{/if}

	{#if $$slots.demo}
		<Accordion title="Demo">
			<slot name="demo" />
		</Accordion>
	{/if}

	<Accordion title="How to use" open={true}>
		<HowToUse {urlPackage} {name} {info} />
	</Accordion>

	{#if hasProps}
		<Accordion title="Props" open={false}>
			<Props {info} />
		</Accordion>
	{/if}

	{#if hasActions}
		<Accordion title="Actions" open={false}>
			<Actions {info} />
		</Accordion>
	{/if}

	{#if hasCSSVariables}
		<Accordion title="CSS Variables" open={false}>
			<CSSVariables {info} />
		</Accordion>
	{/if}

	{#if $$slots.test}
		<Accordion title="Tests" open={false}>
			<slot name="test" />
		</Accordion>
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
</style>
