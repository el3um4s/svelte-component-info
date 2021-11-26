<script>
	import { slide } from 'svelte/transition';
	export let refresh = '';
</script>

<main>
	{#key refresh}
		<div class="main-center" out:slide={{ delay: 50, duration: 400 }}>
			<slot />
		</div>
	{/key}
</main>
