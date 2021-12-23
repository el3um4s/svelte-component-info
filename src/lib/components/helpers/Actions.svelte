<script lang="ts">
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let info: SvelteInformations;
</script>

<div class="list-actions" data-testid="actions">
	<ul>
		{#each info.actions as action}
			<li class="list-of-actions-name">on:<span>{action.name}</span></li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.list-of-actions-name span {
		@apply font-bold;
	}
</style>
