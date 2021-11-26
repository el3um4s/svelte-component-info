<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let title: string = 'Title';
	import ChevronRight from '../icons/ChevronRight.svelte';

	export let visible = true;
	let deg: number;
	$: deg = visible ? 270 : 90;
</script>

<section>
	<div class="header">
		<span class="chevron">
			<ChevronRight
				on:click={() => {
					visible = !visible;
				}}
				{deg}
			/>
		</span>

		{title}
	</div>

	{#if visible}
		<div class="content" transition:slide={{ duration: 400, easing: quintOut }}>
			<slot />
		</div>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply flex flex-col p-2 m-2;
	}

	.header {
		@apply flex flex-row items-center justify-start p-2 font-bold;
		background-color: var(--text-color, theme('colors.gray.800'));
		color: var(--background-color, theme('colors.gray.50'));
	}

	.chevron {
		@apply m-1;
	}

	.content {
		@apply flex flex-col p-2 border border-solid w-full;
		background-color: var(--background-color, theme('colors.gray.50'));
		color: var(--text-color, theme('colors.gray.800'));
		border-color: var(--text-color, theme('colors.gray.800'));
	}
</style>
