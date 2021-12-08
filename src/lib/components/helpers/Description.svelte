<script lang="ts">
	export let description: string = '-';
</script>

{#if description !== '-'}
	<div>
		<i>{description}</i>
	</div>
{/if}
