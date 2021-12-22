<script lang="ts">
	import Chevron from '../icons/Chevron.svelte';

	import { slide } from 'svelte/transition';

	export let title: string = 'Title';
	export let open: boolean = true;
	let onClick = () => {
		open = !open;
	};
</script>

<section>
	<header>
		<Chevron {open} {onClick} />
		{title}
	</header>
	{#if open}
		<div transition:slide={{ duration: 500 }} data-testid="accordion-open">
			<slot />
		</div>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply flex flex-col p-2 m-2;
	}

	header {
		@apply flex flex-row items-center justify-start p-2 font-bold;
		background-color: var(--text-color, theme('colors.gray.800'));
		color: var(--background-color, theme('colors.gray.50'));
	}

	div {
		@apply flex flex-col p-2 border border-solid w-full;
		background-color: var(--background-color, theme('colors.gray.50'));
		color: var(--text-color, theme('colors.gray.800'));
		border-color: var(--text-color, theme('colors.gray.800'));
	}
</style>
