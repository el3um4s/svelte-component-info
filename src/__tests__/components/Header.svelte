<script lang="ts">
	import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	export let links = [{ href: '../', label: 'Home', visible: true }];
</script>

<header>
	<div>
		{#each links as { href, label, visible } ({ href })}
			<a {href} transition:slide={{ duration: 1000 }} class:invisible={!visible} animate:flip
				>{label}</a
			>
		{/each}
	</div>
</header>

<style lang="postcss">
	header {
		@apply block fixed w-full h-16 top-0;
	}
	div {
		@apply h-16 flex flex-row justify-center items-center gap-2;
		border-bottom: 1px solid var(--text-color, theme('colors.gray.800'));
	}
	a {
		@apply m-3 p-1 border border-solid;
		border-color: transparent;
	}

	a:hover {
		@apply rounded box-border;
		border: 1px solid var(--text-color, theme('colors.gray.800'));
	}

	.invisible {
		display: none;
	}
</style>
