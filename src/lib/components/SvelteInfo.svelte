<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';

	import Accordion from './helpers/Accordion.svelte';
	import Name from './helpers/name.svelte';
	import Description from './helpers/Description.svelte';
	import HowToUse from './helpers/HowToUse.svelte';
	import Props from './helpers/Props.svelte';
	import Actions from './helpers/Actions.svelte';

	export let name: string;
	export let description: string = '-';
	export let info: SvelteInformations;
	export let urlPackage: string = '-';

	let className = '';
	export { className as class };
	$: className = className || '';

	$: name = name || undefined;
</script>

<section class={className}>
	<Name {name} />
	<Description {description} />

	{#if $$slots.about}
		<Accordion title="About">
			<slot name="about" />
		</Accordion>
	{/if}

	<HowToUse {urlPackage} {name} {info} />
	<Props {info} />
	<Actions {info} />

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
