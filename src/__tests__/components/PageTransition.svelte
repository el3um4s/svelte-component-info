<script>
	import { slide } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div class="main-center" out:slide={{ delay: 50, duration: 400 }}>
		<slot />
	</div>
{/key}

<style lang="postcss">
	.main-center {
		@apply h-full p-1 w-full flex flex-col;
	}
</style>
