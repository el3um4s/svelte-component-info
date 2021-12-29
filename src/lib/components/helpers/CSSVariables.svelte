<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let info: SvelteInformations;
</script>

<div class="list-css-variables" data-testid="css-variables">
	<ul>
		{#each info.css as css}
			<li>{css.name}</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	li {
		@apply font-bold;
	}
</style>
