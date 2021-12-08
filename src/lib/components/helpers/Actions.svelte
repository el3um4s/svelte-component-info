<script lang="ts">
	import Accordion from './Accordion.svelte';
	import type { SvelteInformations } from '@el3um4s/svelte-get-component-info';
	export let info: SvelteInformations;

	let hasActions = info?.actions.length > 0;
</script>

{#if hasActions}
	<Accordion title="Actions" open={false}>
		<div class="list-actions">
			<ul>
				{#each info.actions as action}
					<li class="list-of-actions-name">on:<span>{action.name}</span></li>
				{/each}
			</ul>
		</div>
	</Accordion>
{/if}

<style lang="postcss">
	.list-of-actions-name span {
		@apply font-bold;
	}
</style>
